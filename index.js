let draggedItem;

      function drag(event) {
        draggedItem = event.target;
        event.dataTransfer.setData("text/plain", event.target.innerHTML);
        //   adding css
        event.target.classList.add("dragging");
      }

      function allowDrop(event) {
        event.preventDefault();
      }

      function drop(event) {
        event.preventDefault();
        let data = event.dataTransfer.getData("text/plain");
        event.target.querySelector(".drop").innerHTML +=
          '<div class="item">' + data + "</div>";
        //   removing draggedItem from its parent node
        draggedItem.parentNode.removeChild(draggedItem);
        //   adding css
        event.target.classList.remove("dragging");
        event.target.classList.add("success");
      }

      function reset() {
        let container1 = document.getElementById("container1");
        let container2 = document.getElementById("container2");
        container1.innerHTML = `<div class="item" draggable="true" ondragstart="drag(event)">
                                <img src="path_to_image1.jpg" alt="Image 1">
                              </div>
                              <div class="item" draggable="true" ondragstart="drag(event)">
                                <span>Text 1</span>
                              </div>
                              <div class="item" draggable="true" ondragstart="drag(event)">
                                <i class="icon-class-1"></i>
                              </div>`;
        container2.innerHTML = '<div class="drop"></div>';
        container2.classList.remove("success");
      }