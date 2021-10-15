import axios from "axios"

export {}
let url: string = "https://udemy-utils.herokuapp.com/api/v1/articles?token=token123"

axios.get(url).then(
    function (response) {
        // 抽象化
        interface Article {
            id: number
            title: string
            description: string
        }

        let data: Article[]

        console.log(response.headers)
        // data = [{
        //     id: 1,
        //     title: "aa",
        //     description: "as"
        // }]
        console.log(response.data)
    }
)