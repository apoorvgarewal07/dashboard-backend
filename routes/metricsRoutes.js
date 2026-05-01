const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const metricsService = require('../services/metricsService');
const insightService = require('../services/insightService');

// Helper to safely parse JSON
const readJsonFile = (filename) => {
  return JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', filename), 'utf8'));
};

router.get('/metrics', (req, res) => {
  try {
    const issues = readJsonFile('issues.json');
    const prs = readJsonFile('prs.json');
    const deployments = readJsonFile('deployments.json');
    const bugs = readJsonFile('bugs.json');

    const metrics = {
      cycleTime: metricsService.calculateCycleTime(issues),
      leadTime: metricsService.calculateLeadTime(prs, deployments),
      bugRate: metricsService.calculateBugRate(bugs, issues),
      deploymentFrequency: metricsService.deploymentFrequency(deployments),
      prThroughput: metricsService.prThroughput(prs)
    };

    const { insights, suggestions } = insightService.generateInsights(metrics);

    res.json({
      metrics,
      insights,
      suggestions
    });
  } catch (error) {
    console.error("Error processing metrics:", error);
    res.status(500).json({ error: "Failed to process metrics" });
  }
});

module.exports = router;
