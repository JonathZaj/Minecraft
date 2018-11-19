var Minecraft = {};

Minecraft.Start = function () {
    Minecraft.initDisplay();
    Minecraft.Use_shovel();
    Minecraft.Use_axe();
    Minecraft.Use_pickaxe()
}
Minecraft.initDisplay = function () {
    Minecraft.matrix = [
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'cloud', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
        ['sky', 'cloud', 'cloud', 'cloud', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
        ['sky', 'cloud', 'cloud', 'cloud', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'tree', 'tree', 'tree', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'tree', 'tree', 'tree', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'tree', 'tree', 'tree', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'tree', 'tree', 'tree', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'tree', 'tree', 'tree', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky', 'sky', 'stone', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky', 'sky', 'stone', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky', 'sky', 'stone', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky', 'sky', 'stone', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
        ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass'],
        ['land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land'],
        ['land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land'],

    ];
    for (var i = 0; i < Minecraft.matrix.length; i++) {
        var line = $('<div>');
        var numberLine = "line" + i;
        line.attr('id', numberLine);
        line.addClass('line');

        for (var j = 0; j < Minecraft.matrix[i].length; j++) {
            var element = $('<div>');
            var classElt = Minecraft.matrix[i][j];
            element.addClass(classElt);
            element.addClass('elt');
            $(line).append(element);
        };
        $('.col-10').append(line);
    }

}

Minecraft.Use_shovel = function () {
    $('#shovel').on('click', function () {
        $('.tree').off();
        $('.wood').off();
        $('.stone').off();
        $('.land').on('click', function () {
            $(this).removeClass('land');
            $(this).addClass('sky');
        });
        $('.grass').on('click', function () {
            $(this).removeClass('grass');
            $(this).addClass('sky');
        });
    });
}

Minecraft.Use_axe = function () {
    $('#axe').on('click', function () {
        $('.land').off();
        $('.grass').off();
        $('.stone').off();
        $('.tree').on('click', function () {
            $(this).removeClass('tree');
            $(this).addClass('sky');
        })
        $('.wood').on('click', function () {
            $(this).removeClass('wood');
            $(this).addClass('sky');
        })
    })
}

Minecraft.Use_pickaxe = function () {
    $('#pickaxe').on('click', function () {
        $('.land').off();
        $('.grass').off();
        $('.tree').off();
        $('.wood').off();
        $('.stone').on('click', function () {
            $(this).removeClass('stone');
            $(this).addClass('sky');
        })
    })
}


Minecraft.Start();
