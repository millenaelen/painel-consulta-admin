// Método para validar CPF
jQuery.validator.addMethod("cpf", function(value, element) {
    value = value.replace(/[.\-]/g, ""); // Remove pontos e traços

    if (value.length !== 11 || /^(\d)\1+$/.test(value)) {
        return false; // Verifica se o CPF tem 11 dígitos ou se todos os números são iguais
    }

    var soma = 0;
    var resto;

    // Validação do primeiro dígito verificador
    for (var i = 1; i <= 9; i++) {
        soma += parseInt(value.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(value.substring(9, 10))) return false;

    soma = 0;

    // Validação do segundo dígito verificador
    for (i = 1; i <= 10; i++) {
        soma += parseInt(value.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(value.substring(10, 11))) return false;

    return true; // CPF válido
}, "Por favor, insira um CPF válido.");


///////////////////////////// validação data nasc ////////////////////////////////////////////

// Método para validar data no formato brasileiro (dd/mm/aaaa), anos bissextos e sem permitir datas futuras
jQuery.validator.addMethod("databr", function(value, element) {
    // Expressão regular para verificar o formato dd/mm/aaaa
    var datePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d$/;

    if (!datePattern.test(value)) {
        return false; // Se a data não está no formato correto
    }

    // Separar os componentes da data
    var parts = value.split('/');
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);

    // Verifica os limites de dias para cada mês
    var daysInMonth = [31, (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (day > daysInMonth[month - 1]) {
        return false; // Se o dia ultrapassa o limite do mês (considerando bissextos)
    }

    // Verificar se a data fornecida é no futuro
    var inputDate = new Date(year, month - 1, day); // Criar objeto Date com a data fornecida
    var currentDate = new Date(); // Data atual

    if (inputDate > currentDate) {
        return false; // Não permite datas futuras
    }

    return true; // Data válida
}, "Por favor, insira uma data válida.");
