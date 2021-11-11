// 1) returns a year the KC Chiefs won the superbowl
// 2) returns undefined if the record has no win objects

superbowlWin = (record) => {
    let result = record.find( record => record.result === "W" )
    return !!result ? result.year : undefined
  }
