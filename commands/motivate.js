const RedditImageFetcher = require("reddit-image-fetcher");

module.exports = {
    name: 'motivate',
    aliases: ['mv'],
    cooldown: 3,
    description: 'Show a motivation image.',
    async execute(message, args, client, _Discord) {
        RedditImageFetcher.fetch({
            type: "custom",
            total: 1,
            subreddit: [
                "getdisciplined",
                "GetMotivated", 
                "Mindfulness",
                "selfimprovement",
                "confidence"
            ]
          }).then((results) => {
            results.length && message.channel.send({files: [results[0].image]});
          });
    }
}