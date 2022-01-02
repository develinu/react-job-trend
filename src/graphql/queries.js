export const getJobDescribes = `
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