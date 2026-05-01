function generateInsights(metrics) {
  let insights = [];
  let suggestions = [];

  if (metrics.leadTime > 5) {
    insights.push("Lead time is high → slow delivery");
    suggestions.push("Improve CI/CD pipeline");
  }

  if (metrics.bugRate > 0.2) {
    insights.push("High bug rate → quality issue");
    suggestions.push("Add testing before deployment");
  }

  if (metrics.prThroughput > 10 && metrics.deploymentFrequency < 3) {
    insights.push("PRs are merging but not deploying");
    suggestions.push("Increase deployment frequency");
  }

  return { insights: insights.map(text => ({ text })), suggestions: suggestions.map(text => ({ text })) };
}

module.exports = {
  generateInsights
};
