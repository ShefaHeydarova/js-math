let lorem =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur incidunt saepe voluptatum reiciendis magni molestiae blanditiis repellendus possimus illum inventore nam natus quaerat molestias animi facilis commodi, maxime porro! Ab maiores, saepe ullam harum nulla iste sed dolorem, deleniti quisquam voluptatibus officiis? Repellat ad, assumenda quo sunt tempore provident commodi consequuntur et? Voluptate, repellat unde. Error consequatur magni officia amet omnis, debitis optio rerum nisi quis, libero, hic delectus impedit asperiores vitae recusandae vero maxime nemo unde ducimus rem. Cum reprehenderit enim nobis accusantium, repellat facere voluptates, iste, voluptate odio quidem qui. Deleniti rem in adipisci neque qui corrupti excepturi dolorem molestiae, debitis porro, consectetur fuga cupiditate amet aspernatur nemo nostrum quas! Corporis possimus earum ad, porro odit placeat, voluptatem accusamus autem neque iste quisquam corrupti iure a ullam similique, dolore libero cumque delectus. Architecto voluptatum quidem dicta autem dignissimos tenetur veniam, illum voluptate magni harum? Dignissimos quo aut et placeat libero quam iusto optio! Facere architecto corporis, ab porro quasi hic nemo, similique dolorem ex animi dignissimos a vel, voluptate cumque. Ullam iure, cum nobis sit, consequatur sed, possimus porro hic distinctio voluptas magnam quod doloremque. Repudiandae quas ducimus sint illo, nobis doloribus. Corrupti nulla voluptates facere expedita fugiat id perspiciatis asperiores corporis, aliquam officia odit non minima voluptatibus? Quos similique sed architecto eaque possimus dignissimos error! Corrupti, illum dolores placeat quo voluptatem in qui repudiandae voluptatum repellendus architecto deserunt impedit est eveniet aliquam magnam iusto dolorem harum, expedita facilis. Optio perferendis modi iste ipsum velit necessitatibus eveniet magni vero. Atque cum dolorem consequuntur porro minus qui aut voluptates sed adipisci excepturi ad praesentium est nemo quae eaque, suscipit exercitationem ducimus assumenda labore fugit aliquam aspernatur molestiae earum? Id quaerat omnis explicabo vero labore assumenda nihil error totam. Iure ut velit temporibus at dolores. Vitae dolorum nam eius error!";

let x = document.getElementById("btn");

let y = (document.getElementById("show").innerHTML = lorem.substr(0, 400));

function goster() {
  if (x.textContent == "Ətraflı") {
    document.getElementById("show").innerHTML = lorem;
    x.textContent = "Qısalt";
    x.style.backgroundColor="#03dac6";
    x.style.color = "white";
  } else {
    document.getElementById("show").innerHTML = lorem.substr(0, 400);
    x.textContent = "Ətraflı";
    x.style.backgroundColor = "lightskyblue";
    x.style.color = "black";
  }
}
