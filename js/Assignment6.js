var Minecraft = {};

Minecraft.Start = function () {
    Minecraft.Modal();
    Minecraft.initDisplay();
    Minecraft.use_shovel();
    Minecraft.use_axe();
    Minecraft.use_pickaxe();
    Minecraft.newGame();
    Minecraft.use_tree_inventory();
    Minecraft.use_wood_inventory();
    Minecraft.use_stone_inventory();
    Minecraft.use_land_inventory();
    Minecraft.changeToNight();
    Minecraft.changeToDay();
}

Minecraft.night = false;

// Modal function
Minecraft.Modal = function () {
    $('#btn_newgame').click(function () {
        $('.container-fluid').css('display', 'block');
        $('.accueil').css('display', 'none');
    })
    $('#btn_tutorial').click(function () {
        $('.modal-tutorial').css('display', 'block');
        $('.modal-body').css('display', 'none');

    })
    $('#btn_endtutorial').click(function () {
        $('.modal-body').css('display', 'block');
        $('.modal-tutorial').css('display', 'none');
    })
}

// Basic page
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


// Night button
Minecraft.changeToNight = function () {
    $("#night-btn").click(function () {
        Minecraft.night = true;
        $(".sky").removeClass("sky").addClass("night-sky");
        $(".cloud").removeClass("cloud").addClass("night-cloud");
    })
}

// Day button
Minecraft.changeToDay = function () {
    $("#day-btn").click(function () {
        Minecraft.night = false;
        $(".night-sky").removeClass("night-sky").addClass("sky");
        $(".night-cloud").removeClass("night-cloud").addClass("cloud");
    })
}

// Select and use the shovel
Minecraft.use_shovel = function () {
    $('#shovel').on('click', function () {
        $(".col-2 button").removeClass("selected-item");
        $(this).addClass("selected-item");
        var landInventory = $("#land-inventory").text();
        landInventory = parseInt(landInventory);
        $('.tree.elt').off('click');
        $('.wood.elt').off('click');
        $('.stone.elt').off('click');
        $('.land.elt, .grass.elt').on('click', function () {
            if (Minecraft.night == false) {
                $(this).removeClass('land grass').addClass('sky');
            }
            else {
                $(this).removeClass('land grass').addClass('night-sky');
            }
            landInventory += 1;
            $("#land-inventory").text(landInventory);
            $(event.target).off();
        });
    });
}

// Select and use the axe
Minecraft.use_axe = function () {
    $('#axe').on('click', function () {
        $(".col-2 button").removeClass("selected-item");
        $(this).addClass("selected-item");
        var treeInventory = $("#tree-inventory").text();
        treeInventory = parseInt(treeInventory);
        $('.stone.elt').off('click');
        $('.land.elt').off('click');
        $('.grass.elt').off('click');
        $('.tree.elt').on('click', function () {
            if (Minecraft.night == false) {
                $(this).removeClass('tree').addClass('sky');
            }
            else {
                $(this).removeClass('tree').addClass('night-sky');
            }
            treeInventory += 1;
            $("#tree-inventory").text(treeInventory);
            $(event.target).off('click');
        })
    })
    $('#axe').on('click', function () {
        $(".col-2 button").removeClass("selected-item");
        $(this).addClass("selected-item");
        var woodInventory = $("#wood-inventory").text();
        woodInventory = parseInt(woodInventory);
        $('.stone.elt').off('click');
        $('.land.elt').off('click');
        $('.grass.elt').off('click');
        $('.wood.elt').on('click', function () {
            if (Minecraft.night == false) {
                $(this).removeClass('wood').addClass('sky');
            }
            else {
                $(this).removeClass('wood').addClass('night-sky');
            }
            woodInventory += 1;
            $("#wood-inventory").text(woodInventory);
            $(event.target).off();
        })
    })
}

// Select and use the pickaxe
Minecraft.use_pickaxe = function () {
    $('#pickaxe').on('click', function () {
        $(".col-2 button").removeClass("selected-item");
        $(this).addClass("selected-item");
        var stoneInventory = $("#stone-inventory").text();
        stoneInventory = parseInt(stoneInventory);
        $('.tree.elt').off('click');
        $('.wood.elt').off('click');
        $('.land.elt').off('click');
        $('.grass.elt').off('click');
        $('.stone.elt').on('click', function () {
            if (Minecraft.night == false) {
                $(this).removeClass('stone').addClass('sky');
            }
            else {
                $(this).removeClass('stone').addClass('night-sky');
            }
            stoneInventory += 1;
            $("#stone-inventory").text(stoneInventory);
            $(event.target).off();
        })
    })
}

// Select and use the leaf element
Minecraft.use_tree_inventory = function () {
    $("#tree-inventory").click(function () {
        $(".col-2 button").removeClass("selected-item");
        $(this).addClass("selected-item");
        $('.stone.elt').off('click');
        $('.land.elt').off('click');
        $('.grass.elt').off('click');
        $('.tree.elt').off('click');
        $('.wood.elt').off('click');
        var treeInventory = $("#tree-inventory").text();
        treeInventory = parseInt(treeInventory);
        $(".sky, .night-sky").click(function () {
            if (treeInventory > 0) {
                $(this).removeClass().addClass('tree elt');
                treeInventory -= 1;
                $("#tree-inventory").text(treeInventory);
                $(event.target).off();
            }
        })
    })
}

// Select and use the trunk element
Minecraft.use_wood_inventory = function () {
    $("#wood-inventory").click(function () {
        $(".col-2 button").removeClass("selected-item");
        $(this).addClass("selected-item");
        $('.stone.elt').off('click');
        $('.land.elt').off('click');
        $('.grass.elt').off('click');
        $('.tree.elt').off('click');
        $('.wood.elt').off('click');
        var woodInventory = $("#wood-inventory").text();
        woodInventory = parseInt(woodInventory);
        $(".sky, .night-sky").click(function () {
            if (woodInventory > 0) {
                $(this).removeClass().addClass('wood elt');
                woodInventory -= 1;
                $("#wood-inventory").text(woodInventory);
                $(event.target).off();
            }
        })
    })
}

// Select and use the stone element
Minecraft.use_stone_inventory = function () {
    $("#stone-inventory").click(function () {
        $(".col-2 button").removeClass("selected-item");
        $(this).addClass("selected-item");
        $('.stone.elt').off('click');
        $('.land.elt').off('click');
        $('.grass.elt').off('click');
        $('.tree.elt').off('click');
        $('.wood.elt').off('click');
        var stoneInventory = $("#stone-inventory").text();
        stoneInventory = parseInt(stoneInventory);
        $(".sky, .night-sky").click(function () {
            if (stoneInventory > 0) {
                $(this).removeClass().addClass('stone elt');
                stoneInventory -= 1;
                $("#stone-inventory").text(stoneInventory);
                $(event.target).off();
            }
        })
    })
}

// Select and use the ground element
Minecraft.use_land_inventory = function () {
    $("#land-inventory").click(function () {
        $(".col-2 button").removeClass("selected-item");
        $(this).addClass("selected-item");
        $('.stone.elt').off('click');
        $('.land.elt').off('click');
        $('.grass.elt').off('click');
        $('.tree.elt').off('click');
        $('.wood.elt').off('click');
        var landInventory = $("#land-inventory").text();
        landInventory = parseInt(landInventory);
        $(".sky, .night-sky").click(function () {
            if (landInventory > 0) {
                $(this).removeClass().addClass('land elt');
                landInventory -= 1;
                $("#land-inventory").text(landInventory);
                $(event.target).off();
            }
        })
    })
}

// Reload the game
Minecraft.newGame = function () {
    $('#new').click(function () {
        location.reload();
    });
}

Minecraft.Start();
