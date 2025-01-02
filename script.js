const posts = [
	{
		name: "Vincent van Gogh",
		username: "vincey1853",
		location: "Zundert, Netherlands",
		avatar: "images/avatar-vangogh.jpg",
		post: "images/post-vangogh.jpg",
		comment: "just took a few mushrooms lol",
		likes: 21,
	},
	{
		name: "Gustave Courbet",
		username: "gus1819",
		location: "Ornans, France",
		avatar: "images/avatar-courbet.jpg",
		post: "images/post-courbet.jpg",
		comment: "i'm feelin a bit stressed tbh",
		likes: 4,
	},
	{
		name: "Joseph Ducreux",
		username: "jd1735",
		location: "Paris, France",
		avatar: "images/avatar-ducreux.jpg",
		post: "images/post-ducreux.jpg",
		comment:
			"gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
		likes: 152,
	},
];

const postsContainer = document.getElementById("posts-container");

posts.forEach((post) => {
	const postHTML = `
    	<section class="post-media">
					<div class="user-header">
						<img src="${post.avatar}" class="avatar" alt=${post.name} />
						<div class="user-details ml-0-65">
							<h2 class="bold no-margin">${post.name}</h2>
							<address>
								<a href="https://maps.google.com?q=${encodeURIComponent(post.location)}">${
		post.location
	}</a>
							</address>
						</div>
					</div>
					<img
						src="${post.post}"
						class="img-post"
						alt="Post by ${post.name}"
					/>
				</section>
				<section class="post-details">
					<div class="interactions no-margin">
						<img
							src="images/icon-heart.png"
							alt="A black outline of the heart symbol"
							class="social-icon"
						/>
						<img
							src="images/icon-comment.png"
							alt="A black outline of a speech bubble"
							class="social-icon"
						/>
						<img
							src="images/icon-dm.png"
							alt="A black outline of the 'share' arrow"
							class="social-icon"
						/>
					</div>
					<p id="likes-count" class="bold">${post.likes.toLocaleString()} likes</p>
					<strong class="username">${post.username}</strong>
					<p class="post-caption">
						${post.comment}
					</p>
				</section>
    `;
	postsContainer.innerHTML += postHTML;
});
