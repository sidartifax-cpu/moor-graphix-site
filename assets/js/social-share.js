// Article social share buttons — Facebook, X, LinkedIn, copy link
document.querySelectorAll('.art-share-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var type = btn.dataset.share;
    var url = encodeURIComponent(window.location.href);
    var title = encodeURIComponent(document.title);
    var shareUrl;
    if (type === 'facebook') {
      shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
    } else if (type === 'x') {
      shareUrl = 'https://twitter.com/intent/tweet?url=' + url + '&text=' + title;
    } else if (type === 'linkedin') {
      shareUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=' + url;
    } else if (type === 'copy') {
      navigator.clipboard.writeText(window.location.href).then(function () {
        btn.classList.add('copied');
        setTimeout(function () { btn.classList.remove('copied'); }, 1800);
      });
      return;
    }
    window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=520');
  });
});
