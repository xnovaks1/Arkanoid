class Node {
  constructor() {
    
    this.nodes = []
  }
  
  add(node) {
    this.nodes.push(node)
  }

  notify(event, argument) {
    for (var index in this.nodes) {
      var node = this.nodes[index]
	  if(typeof (node) != "undefined")
		if (typeof (node[event]) == "function")
			node[event](argument)
    }
  }

  remove(node){
    for(var obj of this.nodes)
        if(node === obj){
            var index = this.nodes.indexOf(node);
            this.nodes.splice(index, 1);
        }
  }

}