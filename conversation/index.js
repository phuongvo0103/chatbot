const ConversationV1 = require('watson-developer-cloud/conversation/v1');
const config = require("../config/conversation-config.json");

const conversation = new ConversationV1({
    username: config.username,
    password: config.password,
    url: config.url,
    version: config.version || 'v1',
    version_date: ConversationV1.VERSION_DATE_2017_02_03 || '2018-07-10'
});

function main(inputMessage) {
    return new Promise(function (resolve, reject) {
        conversation.message({
            workspace_id: config.workspaceId,
            input: {
                'text': inputMessage
            }
        }, function (err, res) {
            if (err) {
                reject(err);
            } else {
                const conversationOutput = {
                    conversation: {
                        input: res.input.text,
                        output: res.output.text
                    },
                    inputMessage: inputMessage
                };
                resolve(conversationOutput);
            }
        });
    });
}

module.exports = main;