var Minecraft = {};

Minecraft.Start = function () {
    Minecraft.initDisplay();
    Minecraft.use_shovel();
    Minecraft.use_axe();
    Minecraft.use_pickaxe();
    Minecraft.use_inventory();
    Minecraft.newGame();
    // Minecraft.inventory();
}
Minecraft.initDisplay = function () {
    Minecraft.matrix = [
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'cloud', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
        ['sky', 'cloud', 'cloud', 'cloud', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'cloud', 'cloud', 'cloud', 'cloud', 'sky', 'sky'],
        ['sky', 'cloud', 'cloud', 'cloud', 'cloud', 'cloud', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'cloud', 'cloud', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'cloud', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'tree', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'tree', 'tree', 'tree', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'tree', 'tree', 'tree', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'tree', 'tree', 'tree', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'tree', 'tree', 'tree', 'tree', 'tree', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'tree', 'tree', 'tree', 'tree', 'tree', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'tree', 'tree', 'tree', 'tree', 'tree', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'stone', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'stone', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'stone', 'sky', 'wood', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'stone', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'stone', 'sky', 'wood', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'stone', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'stone', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'stone', 'sky', 'wood', 'sky', 'sky', 'sky'],
        ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass'],
        ['land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land'],
        ['land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land'],

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

Minecraft.use_shovel = function () {
    $('#shovel').on('click', function () {
        $('.tree').off();
        $('.wood').off();
        $('.stone').off();
        $('.land').on('click', function () {
            $(this).removeClass('land');
            $(this).addClass('sky');
            $("#inventory").removeClass().addClass('btn-inventory');
            $('#inventory').addClass('land');
        });
        $('.grass').on('click', function () {
            $(this).removeClass('grass');
            $(this).addClass('sky');
            $("#inventory").removeClass().addClass('btn-inventory');
            $('#inventory').addClass('land');

        });
    });
}

Minecraft.use_axe = function () {
    $('#axe').on('click', function () {
        $('.land').off();
        $('.grass').off();
        $('.stone').off();
        $('.tree').on('click', function () {
            $(this).removeClass('tree');
            $(this).addClass('sky');
            $("#inventory").removeClass().addClass('btn-inventory');
            $('#inventory').addClass('tree');

        })
        $('.wood').on('click', function () {
            $(this).removeClass('wood');
            $(this).addClass('sky');
            $("#inventory").removeClass().addClass('btn-inventory');
            $('#inventory').addClass('wood');

        })
    })
}

Minecraft.use_pickaxe = function () {
    $('#pickaxe').on('click', function () {
        $('.land').off();
        $('.grass').off();
        $('.tree').off();
        $('.wood').off();
        $('.stone').on('click', function () {
            $(this).removeClass('stone');
            $(this).addClass('sky');
            $("#inventory").removeClass().addClass('btn-inventory');
            $('#inventory').addClass('stone');

        })
    })
}
Minecraft.use_inventory = function () {
    $('.btn-inventory, btn-inventory.stone, btn-inventory.land, btn-inventory.grass, btn-inventory.tree, btn-inventory.wood').on('click', function () {
        style = $(this).attr('class');
        style = style.substring(13)
        console.log(style);
        $('.sky').on('click', function () {
            $(this).removeClass().addClass('elt')
            $(this).addClass(style);
        });
    });
}
Minecraft.newGame = function () {
    $('#new').click(function () {
      location.reload();
    });
  }
// Minecraft.inventory = function () {
//     $('.land').on('click', function () {
//         $('#inventory').css('background-image', "url('./Images/land.jpg')");
//     })
//     $('.grass').on('click', function () {
//         $('#inventory').css('background-image', "url('./Images/land.jpg')");
//     })
//     $('.tree').on('click', function () {
//         $('#inventory').css('background-image', "url('./Images/Tree.png')");
//     })
//     $('.wood').on('click', function () {
//         $('#inventory').css('background-image', "url('./Images/wood.jpg')");
//     })
//     $('.stone').on('click', function () {
//         $('#inventory').css('background-image', "url('./Images/stone.PNG')");
//     })
//     $('.sky').on('click', function () {
//         $('#inventory').css('background-image', "url('./Images/noir.jpg')");
//     })
// }


Minecraft.Start();
