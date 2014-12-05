
'use strict'; // hace un chequeo sintactico mas robusto



//Aca va todo lo que se vaya a modificar de la Clase de la que se van a instanciar

//configuracion de preguntar por la variable del enter (config.keys.enter)

var config = {
	keys:{
		enter: 13
	}
};


/**ESTE ES EL CONSTRUCTOR - Configuracion**/

//si hay algun dato que no me pasaron por parametro el usuario, uso las opciones del objeto interno creado por mi

var Todo = function(options){
	console.log('Se creo una nueva ToDo!')
	//cada vez que se va a instanciar y no le pone opciones valen las mias
	
	//estas options son el obj prioritario, las custom, y el extend crea un objeto que unifica ambas y 
	//le da prioridad a estas que si no se las da usa las de default 

	this.options = $.extend(options, {

		//este es el objeto options por default
		todoAppEl: '.todo-app',
		inputEl: '.todo-input',
		listEl: '.todo-list',
		removeEl: '.todo-item-remove',
		doneEl: '.todo-item-toggle-done',
		clearEl: '.todo-clear-done'
	});

	//se guarda en variable para volver a usarlos
	this.$app = $(this.options.todoAppEl);
	this.$input = $(this.options.inputEl);
	this.$list = $(this.options.listEl);

	//se puso una escucha para estas variables
	this.bindEvents = function(){
		this.$app.on('keypress', this.options.inputEl, this, this.add);
	};

	//ejecuta...
	this.bindEvents();
};

//Crear elementos que no se van a modificar


//agregar una tarea

Todo.prototype.add = function(event){

	//uso that/self para referirme al todo-app porque el elemento todavia no existe
	//this ->> depende del contexto, es elemento que sufrio el evento o la accion del usuario, no al todo
	var that = event.data;

	if(event.which === config.keys.enter){

		//For key or mouse events, this property indicates the specific key or button that was pressed.
		if(that.$input.val().length > 0){
			var listItem = 
            '<li>' +
                '<div class="todo-item">' +
                    '<input class="todo-item-toggle-done" type="checkbox">' +
                    '<label>' + that.$input.val() + '</label>' +
                    '<a href="#" class="todo-item-remove"></a>' +
                '</div>' +
            '</li>';

		    that.$list.append(listItem);
		    that.$input.val();
		}
        
	}
};

//Quitar una tarea

Todo.prototype.remove = function(){

};

//marcadas como realizadas (checked) se van abajo y si se desmarca vuelve arriba
Todo.prototype.toggleDone = function(){

};

//borrar todas las tareas realizadas
Todo.prototype.clearDone = function(){

};

//guardar la info
Todo.prototype.save = function(){

};

//mostrar la info
Todo.prototype.showSavedData = function(){

};