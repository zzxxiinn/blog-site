"use strict";

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs-extra");
const dayjs = require("dayjs");

const blogPath = path.join(__dirname, "..", "blog");
const filenameReg = new RegExp("^[0-9a-zA-Z-_]+$");

const NEW_TYPE = "+ Create new type";
const currBlogTypes = [...fs.readdirSync(blogPath), NEW_TYPE];

function createPostTemplate(type, name) {
  const postDirPath = path.join(blogPath, type, name);
  const postWillCreatePath = path.join(postDirPath, "index.mdx");
  const tempString = `---
title: "${name}"
date: "${dayjs(new Date()).format("YY-MM-DD")}"
tags: ["${type}"]
---

## hello world!
`;

  try {
    fs.ensureDirSync(postDirPath);
    fs.writeFileSync(postWillCreatePath, tempString, { encoding: 'utf8'});
    console.log(`${postWillCreatePath} created! enjoy your writing!`)
  } catch(e) {
    console.error('Something is error: ', e);
  }
}

function main() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "type",
        message: "What kind of your new post?",
        choices: currBlogTypes,
      },
    ])
    .then(({ type }) => {
      if (type === NEW_TYPE) {
        addNewType();
      } else {
        addNewPost(type);
      }
    });
}

function addNewType() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "type",
        message: "Input your new post type:",
        validate(value) {
          return (
            filenameReg.test(value) ||
            "Post name does not match reg: ^[0-9a-zA-Z-_]+$"
          );
        },
      },
    ])
    .then(({ type }) => addNewPost(type));
}

function addNewPost(type) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Input your new post name:",
        validate(value) {
          if (fs.existsSync(path.join(blogPath, type, value))) {
            return `Post path existing with type/name ${type}/${value}`
          }
          return (
            filenameReg.test(value) ||
            "Post name does not match reg: ^[0-9a-zA-Z-_]+$"
          );
        },
      },
    ])
    .then(({ name }) => {
      createPostTemplate(type, name);
    });
}

main();
