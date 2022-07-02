export const fetchData1 = (cb: (data: string) => void) => {
  setTimeout(() => {
    cb("THIS IS DATA1!!!!!!")
  }, 5000)
}

export const fetchData2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("THIS IS DATA2!!!!!!")
    }, 5000)
  })
}