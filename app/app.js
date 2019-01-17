$('.form').on('submit', function(){
	event.preventDefault()
	link = $('.input').val()
	teks = 'https://api.whatsapp.com/send?phone=6281545143654&text=*Link*%20%3A%20' + link + '%0A*Komentar*%20%3A%0A%0A'
	$('.output').val(teks)
})