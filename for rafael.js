const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click" , () => {
	question.innerHTML = "sayaaaangg, maaf yaa belakangan ini akuu banyaaaak bangeett ngambeknyaa, terimakasii yaa sudah sabar sama akuu! iloveuuuu sooo much bbbbb";
	gif.src = "https://media.giphy.com/media/PJ3285VmkVmkElbpik/giphy.gif?cid=ecf05e478exxd39e0ukp2cm1w7komfh5ry8k238rvc3putkb&ep=v1_gifs_search&rid=giphy.gif&ct=g";
});

noBtn.addEventListener("mouseover" , () => {
	const noBtnRect = noBtn.getBoundingClientRect();
	const maxX = window.innerWidth - noBtnRect.width;
	const maxY = window.innerHeight - noBtnRect.height;

	const randomX = Math.floor(Math.random() * maxX);
	const randomY = Math.floor(Math.random() * maxY);

	noBtn.style.left = randomX + "px";
	noBtn.style.top = randomY + "px";
});
