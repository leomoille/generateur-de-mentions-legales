$(document).ready(function () {
  $('#generated-content').hide()
  $('[data-toggle="popover"]').popover()

  const btnCopyMentions = document.querySelector('.ml-copy')
  const btnCopyPrivacyPolicy = document.querySelector('.pc-copy')

  const ownerName = $('.owner-name')
  const ownerSarl = $('.owner-sarl')
  const ownerMail = $('.owner-mail')
  const ownerAddress = $('.owner-address')
  const publicationName = $('.publication-name')
  const publicationMail = $('.publication-mail')
  const webmasterName = $('.webmaster-name')
  const webmasterMail = $('.webmaster-mail')
  const hostName = $('.host-name')
  const hostAddress = $('.host-address')
  const websiteUrl = $('.website-name-url')
  const websiteMail = $('.website-mail')

  $('#generate').click(function (event) {
    event.preventDefault()

    ownerName.text($('#owner-name-input').val())
    ownerMail.text($('#owner-mail-input').val())
    ownerSarl.text(`– ${$('#owner-sarl-input').val()}`)
    ownerAddress.text($('#owner-address-input').val())
    publicationName.text($('#publication-name-input').val())
    publicationMail.text($('#publication-mail-input').val())
    webmasterName.text($('#webmaster-name-input').val())
    webmasterMail.text($('#webmaster-mail-input').val())
    hostName.text($('#host-name-input').val())
    hostAddress.text($('#host-address-input').val())
    websiteUrl.text($('#website-name-url-input').val()).
      attr('href', `https://${$('#website-name-url-input').val()}`)
    websiteMail.text($('#website-mail-input').val())

    if (btnCopyMentions) {
      btnCopyMentions.addEventListener('click', docopy)
    }

    if (btnCopyPrivacyPolicy) {
      btnCopyPrivacyPolicy.addEventListener('click', docopy)
    }

    $('#generated-content').show()
  })

  function docopy() {

    // Cible de l'élément qui doit être copié
    const target = this.dataset.target
    const fromElement = document.querySelector(target)
    if (!fromElement) return

    // Sélection des caractères concernés
    const range = document.createRange()
    let selection = window.getSelection()
    range.selectNode(fromElement)
    selection.removeAllRanges()
    selection.addRange(range)

    try {
      // Exécution de la commande de copie
      const result = document.execCommand('copy')
      if (result) {
        // La copie a réussi
        console.log('Copié !')
      }
    } catch (err) {
      // Une erreur est surevenue lors de la tentative de copie
      alert(err)
    }

    // Fin de l'opération
    selection = window.getSelection()
    if (typeof selection.removeRange === 'function') {
      selection.removeRange(range)
    } else if (typeof selection.removeAllRanges === 'function') {
      selection.removeAllRanges()
    }
  }
})