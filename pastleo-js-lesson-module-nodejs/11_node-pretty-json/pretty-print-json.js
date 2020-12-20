const fs = require('fs/promises')
    // 引入filesystem/函式庫
    // const fs = require('fs').promises

const filename = process.argv[2];
// 抓noed[0]pretty-pring-json[1]posts.json[2]

if (!filename) {
    // 如果沒給值
    console.error("Please provide json filename");
    process.exit(127)
        // 結束(127狀態)
}

const main = async jsonFilename => {
    const jsonString = await fs.readFile(jsonFilename, 'utf-8');
    // 讀檔(檔案, '格式')
    const json = JSON.parse(jsonString)
        // 字串解析成JSON
    process.stdout.write(JSON.stringify(json, null, 2))
        // 完整印出畫面到終端,空格2格
}

main(filename);