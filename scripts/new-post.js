"use strict";
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs-extra");
const dayjs = require("dayjs");

const blogPath = path.join(__dirname, "..", "blog");
const filenameReg = new RegExp("^[0-9a-zA-Z-_ ]+$");

const NEW_TYPE = "+ Create new type";

function getPostTypes() {
  const types = fs
    .readdirSync(blogPath)
    .filter(
      (p) =>
        fs.statSync(path.join(blogPath, p)).isDirectory && filenameReg.test(p)
    );

  return [...types, NEW_TYPE];
}

function createPostTemplate(type, name) {
  const postDirPath = path.join(blogPath, type, name);
  const postWillCreatePath = path.join(postDirPath, "index.mdx");
  const tempString = `---
title: "${name}"
date: "${dayjs(new Date()).format("YYYY-MM-DD")}"
tags: ["${type}"]
---

## 这篇文章讲什么？

## 我为什么写这篇文章？

## 这篇文章对谁有用？

## 有什么用？

## 正文

## 一些名词解释

## 步骤概览

## 具体步骤

## 问题： xxxx?
`;

  try {
    fs.ensureDirSync(postDirPath);
    fs.writeFileSync(postWillCreatePath, tempString, { encoding: "utf8" });
    console.log(`${postWillCreatePath} created! enjoy your writing!`);
  } catch (e) {
    console.error("Something is error: ", e);
  }
}

function main() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "type",
        message: "What kind of your new post?",
        choices: getPostTypes(),
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
            "Post name does not match reg: ^[0-9a-z-_]+$"
          );
        },
      },
    ])
    .then(({ type }) => addNewPost(type.toLowerCase()));
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
            return `Post path existing with type/name ${type}/${value}`;
          }
          return (
            filenameReg.test(value) ||
            "Post name does not match reg: ^[0-9a-zA-Z-_ ]+$"
          );
        },
      },
    ])
    .then(({ name }) => {
      createPostTemplate(type, name.replace(/\s/g, "-").toLowerCase());
    });
}

main();
