"use strict";

async function _createComment(articleId, contents) {
    const {data: contentsId} = await window.point.storage.putString({data: contents})
    await window.point.contract.call({
        contract: "Blog",
        method: "createCommentByArticle",
        params: [articleId, contentsId]
    });
    window.location.reload();
}

function postComment(form) {
    _createComment(form.elements.articleId.value, form.elements.contents.value)
        .then(() => {form.elements.contents.value = ""})
        .catch(e => console.error(e))
}

async function _createArticle(title, contents) {
    const {data: contentsId} = await window.point.storage.putString({data: contents})
    await window.point.contract.call({
        contract: "Blog",
        method: "createArticle",
        params: [title, contentsId]
    });
    window.location.replace('/')
}

function createArticle(form) {
    _createArticle(form.elements.title.value, form.elements.contents.value)
        .catch(e => console.error(e))
}
