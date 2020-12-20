const { readFile } = require('fs/promises');

const { createWriteStream } = require('fs');
// 寫入
// https://nodejs.org/api/fs.html#fs_fs_createwritestream_path_options

const csv = require('fast-csv');
// https://c2fo.io/fast-csv/docs/introduction/example#formatting

const argJsonFilename = process.argv[2];
const argCsvFilename = process.argv[3];
if (!(argJsonFilename && argCsvFilename)) {
    console.error("Please provide json and csv filename");
    process.exit(127)
}

const main = async(jsonFilename, csvFilename) => {
    const jsonString = await readFile(jsonFilename, 'utf8')
    const json = JSON.parse(jsonString)
        // JS陣列
    const csvStream = csv.format({ headers: true });
    // 建立CSV格式
    const writeStream = createWriteStream(csvFilename)
        // 建立寫入檔案
    csvStream.pipe(process.stdout).on('end', () => process.exit());
    // 接管子寫入CSV實體，寫完後程式結束
    json.forEach(row => csvStream.write(row))
        // 直接將資料寫入
    csvStream.end();
    // 結束
}

main(argJsonFilename, argCsvFilename);