export const getJobAnalysis = `
  query getJobAnalysis ($search: String!, $date: String!) {
    getJobAnalysis(search: $search, targetDate: $date) {
      advance
      analysisCount
      benefit
      company
      etc
      introduce
      requirement
      role
      search
      summary_experience
      summary_salary
      summary_skill
      targetDate
    }
  }
`

export const listJobDescribes = `
  query listJobAnalyses ($date: String) {
    listJobAnalyses(limit: 11000, filter: {targetDate: {eq: $date}}) {
      items {
        search
        targetDate
        analysisCount
        company
        summary_experience
        summary_salary
        summary_skill
        introduce
        role
        requirement
        advance
        benefit
        etc
      }
    }
  }
`