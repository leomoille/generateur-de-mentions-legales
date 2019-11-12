$(document).ready(function () {
  $('#generated-content').hide()
  $('[data-toggle="popover"]').popover()


  const btnCopyMentions = document.querySelector('.ml-copy')
  const btnCopyPrivacyPolicy = document.querySelector('.pc-copy')

  const ownerFirstname = $('.owner-firstname')
  const ownerLastname = $('.owner-lastname')
  const ownerMail = $('.owner-mail')
  const ownerAddress = $('.owner-address')
  const ownerCP = $('.owner-cp')
  const ownerCity = $('.owner-city')
  const publicationFirstname = $('.publication-firstname')
  const publicationLastname = $('.publication-lastname')
  const webmasterFirstname = $('.webmaster-firstname')
  const webmasterLastname = $('.webmaster-lastname')
  const webmasterMail = $('.webmaster-mail')
  const hostName = $('.host-name')
  const hostAddress = $('.host-address')
  const hostCP = $('.host-cp')
  const hostCity = $('.host-city')
  const websiteUrl = $('.website-url')
  const websiteMail = $('.website-mail')
  const urlPrivacy = $('.url-privacy')

  $('#generate').click(function (event) {
    event.preventDefault()

    ownerFirstname.text($('#owner-firstname-input').val())
    ownerLastname.text($('#owner-lastname-input').val())
    ownerMail.text($('#owner-mail-input').val())
    ownerAddress.text($('#owner-address-input').val())
    ownerCP.text($('#owner-cp-input').val())
    ownerCity.text($('#owner-city-input').val())
    publicationFirstname.text($('#publication-firstname-input').val())
    publicationLastname.text($('#publication-lastname-input').val())
    webmasterFirstname.text($('#webmaster-firstname-input').val())
    webmasterLastname.text($('#webmaster-lastname-input').val())
    webmasterMail.text($('#webmaster-mail-input').val())
    hostName.text($('#host-name-input').val())
    hostAddress.text($('#host-address-input').val())
    hostCP.text($('#host-cp-input').val())
    hostCity.text($('#host-city-input').val())
    websiteUrl.text($('#website-url-input').val())
    websiteMail.text($('#website-mail-input').val())
    urlPrivacy.text($('#url-privacy-input').val())

    if (btnCopyMentions) {
      btnCopyMentions.addEventListener('click', docopy)
    }

    if (btnCopyPrivacyPolicy) {
      btnCopyPrivacyPolicy.addEventListener('click', docopy)
    }

    $('#generated-content').show()
  })

  function docopy () {

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
      // Une erreur est surevnue lors de la tentative de copie
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