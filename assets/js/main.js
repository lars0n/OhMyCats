// on initialize jquery
$(function(){

    // on crée un évenement submit pour le formulaire
    $('#formulairChat').on('submit', function(e) {
        // on annule le comportement par default
        e.preventDefault()

        // on déclare nos variable
        var choixcat = $('#selectedCats');
        var message  = $('#message');
        var formisvalid = true;

        // on retire les erreurs en HTML lors de la soumission
        message.parent().removeClass('has-error')
        choixcat.parent().removeClass('has-error')

        // condition qui vérifie que le champs sélectionner ne soit pas sélectioner 
        if(choixcat.val() == 00 ) {
            formisvalid = false;
            // on affiche une erreur
            choixcat.parent().addClass('has-error')
        }

        // vérifie si le champ message a au moins 15 caractère 
        if(message.val().length < 15) {
            formisvalid = false;
            // on affiche une erreur
            message.parent().addClass('has-error')
        }

        // si il n'y a pas d'erreu alors on affiche un message comme quoi tout c'est bien dérouler
        if(formisvalid) {
            $(this).replaceWith('<div class="alert alert-success" role="alert"><strong>'+ choixcat.val() +'</strong> ! votre nouveau chaton vous attend impatiament </div>');
            $('.alert-success').hide().fadeIn('slow');
        }

    })

    // évenement qui écoute le champ message lorsqu'il est modifiée
    $('#message').on('input', function() {

        // affiche le nombre de caractère tapper juste en desssous du formulaire
        $('#comptelettre').replaceWith('<span id="comptelettre" class="pull-right">'+ $(this).val().length +'</span>')
        
        // si le champs est vide retire les erreurs
        if($(this).val().length === 0) {
            $(this).parent().removeClass('has-error')
        }

        // si le champs contient entre 1 et 15 caractère affiche une erreur 
        if($(this).val().length > 0 && $(this).val().length < 15) {
            $(this).parent().removeClass('has-success')
            $(this).parent().addClass('has-error')
        }

        // si le champ contient plus de 15 caractère affiche success
        if($(this).val().length >= 15) {
            $(this).parent().removeClass('has-error')
            $(this).parent().addClass('has-success')
        }
    })
    
    // évenement qui ecoute lorsque le champs select est blur
    $('#selectedCats').on('blur', function() {
        // si le champ select est blur alors on retire les erreurs
        $(this).parent().removeClass('has-error');
        $(this).parent().removeClass('has-success');

        // si un chat est choisit alors affiche success
        if($(this).val() != 00) {
            $(this).parent().addClass('has-success')
        }
    })
})
