import axios from 'axios'

export default function ajax(url = "", data = {}, type = "GET") {

    return new promise(function (resolve, reject) {

        let promise;
        if (type == 'GET') {
            // 准备 url query 参数数据
            let datastr = '';
            //数据拼接字符串
            Object.keys(data).forEach((key) => {
                datastr += key + '=' + data[key] + '&'
            })
            if (datastr != '') {
                datastr = datastr.substring(0, lastindexOf('&'))
                url = url + '?' + datastr
            }
            promise = axios.get(url)
        } else {
            promise = axios.post(url, data)
        }

        promise.then((response) => {
            resolve(response.data);
        }).catch((error) => {
            reject(error);
        })

    })
}