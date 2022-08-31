import express from 'express'
import postmanToOpenApi from 'postman-to-openapi'
import path from 'path'

const collectionJson = path.join(__dirname, './collection.json')
const outputPath = path.join('./api.yaml')

async function main(){

  try{
    const result = await postmanToOpenApi(collectionJson, outputPath, {
      defaultTag: "General"
    })

    console.log(result)
  }catch(e){
    console.log(e)
  }
}

main()
