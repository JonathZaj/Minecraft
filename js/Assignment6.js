var Minecraft = {};

Minecraft.Start = function () {
    Minecraft.initDisplay();
    Minecraft.use_shovel();
    Minecraft.use_axe();
    Minecraft.use_pickaxe();
    Minecraft.use_inventory();
    Minecraft.newGame();

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
            var landInventory = $("#land-inventory").text();
            landInventory = parseInt(landInventory);
            landInventory++;
            $("#land-inventory").text(landInventory);
        });
        $('.grass').on('click', function () {
            $(this).removeClass('grass');
            $(this).addClass('sky');
            var landInventory = $("#land-inventory").text();
            landInventory = parseInt(landInventory);
            landInventory++;
            $("#land-inventory").text(landInventory);

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
            var treeInventory = $("#tree-inventory").text();
            treeInventory = parseInt(treeInventory);
            treeInventory++;
            $("#tree-inventory").text(treeInventory);
        })
        $('.wood').on('click', function () {
            $(this).removeClass('wood');
            $(this).addClass('sky');
            var woodInventory = $("#wood-inventory").text();
            woodInventory = parseInt(woodInventory);
            woodInventory++;
            $("#wood-inventory").text(woodInventory);
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
            var stoneInventory = $("#stone-inventory").text();
            stoneInventory = parseInt(stoneInventory);
            stoneInventory++;
            $("#stone-inventory").text(stoneInventory);
        })
    })
}

Minecraft.use_tree_inventory = function () {
    $("#tree-inventory").click(function () {
        $(".sky.elt").click(function(){
            var treeInventory = $("#tree-inventory").text();
            treeInventory = parseInt(treeInventory);
            if(treeInventory>0){
                $(this).removeClass().addClass('elt').addClass("tree");
                treeInventory--;
                $("#tree-inventory").text(treeInventory);
            }
        })
    })
}

Minecraft.use_inventory = function () {
    $('.btn-inventory, btn-inventory.stone, btn-inventory.land, btn-inventory.grass, btn-inventory.tree, btn-inventory.wood').on('click', function () {
        style = $(this).attr('class');
        style = style.substring(13)
        $('.sky').one('click', function () {
            $(this).removeClass().addClass('elt')
            $(this).addClass(style);
            $('.sky').off();
            $('#inventory').addClass('empty');

        });
    });
}
Minecraft.newGame = function () {
    $('#new').click(function () {
        location.reload();
    });
}

Minecraft.Start();
