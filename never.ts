export {}

function error1(message: string): never {
    // エラーを投げる
    throw new Error(message)
}

try {
    let result = error1("test_error")
    console.log("start")
} catch (error1) {
    console.log(error1)
}