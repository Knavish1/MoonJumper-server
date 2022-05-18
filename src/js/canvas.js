import platform from '../img/platform4.png'
import sky  from '../img/sky.png'
import hills from '../img/hills.png'
import hills2 from '../img/hills2.png'
import ender from '../img/end1.png'



const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 410

const jumpcount = 0
const gravity = 0.5

class Mooninite {
    constructor(){
        this.speed = 10
        this.position = {
            x: 200, 
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }

        this.width = 30 
        this.height = 30
    }

    manifest() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        this.manifest()
        
        if(this.position.y + this.height + this.velocity.y <= canvas.height)
             this.velocity.y += gravity
        
                     
    }
}

class MoonRocks {
    constructor({x, y, image}){
        this.position = {
            x,
            y
        }

      this.image = image
      this.width = image.width
      this.height = image.height

         
    }
    manifest(){
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}
class scenery {
  constructor({x, y, image}){
      this.position = {
          x,
          y
      }

      this.image = image
      this.width = image.width
      this.height = image.height

       
  }
  manifest(){
      c.drawImage(this.image, this.position.x, this.position.y)
  }
}
class Goal {
    constructor({x, y, image}){
        this.position = {
            x,
            y
        }
  
        this.image = image
        this.width = image.width
        this.height = image.height
  
         
    }
    manifest(){
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

const image = new Image()

function createImage(imageSrc){
const image = new Image()
image.src = imageSrc
return image
}

let endMarker = [new Goal({x: 150, y: 400, image: createImage(ender)}), new Goal({x:3000, y: 400, image: createImage(ender)})]

let player = new Mooninite()

let platformImage = createImage(platform)

let platforms = [new MoonRocks({x: -1, y: 380, image: platformImage}), new MoonRocks({x: platformImage.width -2, y: 380, image: platformImage}), new MoonRocks({x: platformImage.width*2 -10, y: 380, image: platformImage}),new MoonRocks({x: platformImage.width*3 -12, y: 380, image: platformImage}), new MoonRocks({x: platformImage.width*4 -14, y: 380, image: platformImage}),new MoonRocks({x: platformImage.width*5 + 50, y: 380, image: platformImage})]

let behind = [new scenery ({x: -2 , y: 0, image: createImage(sky)}), new scenery ({x: 1400, y: 0, image:createImage(sky)}), new scenery ({x: 2100, y: 0, image:createImage(sky)}), new scenery ({x: 700, y: 0, image:createImage(sky)}), new scenery ({x: 1200, y: 245, image:createImage(hills)}), new scenery({x: 450, y: 245, image:createImage(hills)})]


const keys = {
    right: {
        pressed: false 
    },
    left: {
        pressed: false
    },
    up: {
        pressed: false
    }
}

let scrollOffset = 0
console.log(image)

function init(){

 // supposed to create new image that toggles game end, but has not shown up   
 endMarker = [new Goal({x: 150, y: 400, image: createImage(ender)}), new Goal({x: 3000, y: 250, image: createImage(ender)})]

 player = new Mooninite()

 platformImage = createImage(platform)

 platforms = [new MoonRocks({x: platformImage.width*8 + 100, y: 310, image: createImage(hills2)}), new MoonRocks({x: -1, y: 400, image: platformImage}), new MoonRocks({x: platformImage.width -2, y: 400, image: platformImage}), new MoonRocks({x: platformImage.width*2 -10, y: 400, image: platformImage}),new MoonRocks({x: platformImage.width*3 -12, y: 400, image: platformImage}), new MoonRocks({x: platformImage.width*4 -14, y: 400, image: platformImage}),new MoonRocks({x: platformImage.width*5 + 200, y: 400, image: platformImage}), new MoonRocks({x: platformImage.width*6 + 200, y: 400, image: platformImage}), new MoonRocks({x: platformImage.width*7 +200, y: 400, image: platformImage}, new MoonRocks({x: platformImage.width*8, y: 400, image: platformImage})), new MoonRocks({x: platformImage.width*10 + 200, y: 400, image: platformImage}), new MoonRocks({x: platformImage.width*11 + 200, y: 400, image: platformImage}), new MoonRocks({x: platformImage.width*12 + 200, y: 400, image: platformImage}), new MoonRocks({x: platformImage.width*13 + 200, y: 400, image: platformImage}), new MoonRocks({x: platformImage.width*14 + 200, y: 400, image: platformImage}), new MoonRocks({x: platformImage.width*15 + 200, y: 400, image: platformImage}), new MoonRocks({x: platformImage.width*17 , y: 300, image: platformImage}), new MoonRocks({x: platformImage.width*18.5 , y: 200, image: platformImage}), new MoonRocks({x: platformImage.width*21 + 200, y: 400, image: platformImage}), new MoonRocks({x: platformImage.width*22 + 200, y: 400, image: platformImage}), new MoonRocks({x: platformImage.width*23 + 200, y: 400, image: platformImage}), new MoonRocks({x: platformImage.width*23 + 200, y: 400, image: platformImage}), new MoonRocks({x: platformImage.width*24 + 200, y: 400, image: platformImage}),new MoonRocks({x: platformImage.width*25 + 200, y: 400, image: platformImage}),new MoonRocks({x: platformImage.width*26 + 200, y: 400, image: platformImage}), new MoonRocks({x: platformImage.width*27 + 200, y: 400, image: platformImage}),  new MoonRocks({x: platformImage.width*28 + 200, y: 400, image: platformImage}),  new MoonRocks({x: platformImage.width*29 + 200, y: 400, image: platformImage}),  new MoonRocks({x: platformImage.width*30 + 200, y: 400, image: platformImage})    ]

 behind = [new scenery ({x: -2 , y: 0, image: createImage(sky)}), new scenery ({x: 700, y: 0, image:createImage(sky)}), new scenery ({x: 1200, y: 280, image:createImage(hills)}), new scenery({x: 1500, y: 280, image:createImage(hills)}),  new scenery({x: 1400, y: 0, image:createImage(sky)}),new scenery({x: 2100, y: 0, image:createImage(sky)}),new scenery({x: 2800, y: 0, image:createImage(sky)}),new scenery({x: 3500, y: 0, image:createImage(sky)}), new scenery({x: 4200, y: 0, image:createImage(sky)}), new scenery({x: 4900, y: 0, image:createImage(sky)}) ]
 



scrollOffset = 0
}
// recursive canvas drawing/ moving user
function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)
    //console.log('go') // making sure animation is working
    
    behind.forEach((sky) => {
      sky.manifest()
    })

    platforms.forEach((platform) => {
        platform.manifest()
    })
    player.update()

    if(keys.right.pressed && player.position.x < 400){
        player.velocity.x = player.speed
    } else if ((keys.left.pressed && player.position.x > 100) || keys.left.pressed && scrollOffset ===0 && player.position.x > 0){
        player.velocity.x = -player.speed
    } else {
        player.velocity.x = 0

        if (keys.right.pressed){
            scrollOffset += player.speed
            platforms.forEach((platform) => {
            platform.position.x -= player.speed
        })
        behind.forEach(scenery => {
            scenery.position.x -= player.speed * .66
        })
           
        } else if (keys.left.pressed && scrollOffset > 0) {
            scrollOffset -= player.speed
            platforms.forEach((platform) => {
            platform.position.x += player.speed
        })
        behind.forEach(scenery => {
            scenery.position.x += player.speed * .66
        })
            
        }
    }
    // platform collision statement
    platforms.forEach((platform) => {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width){
        player.velocity.y = 0
    }
})
   //ends game after certain reach
    endMarker.forEach((ender) => {
        if (player.position.y + player.height <= ender.position.y && player.position.y + player.height + player.velocity.y >= ender.position.y && player.position.x + player.width >= ender.position.x && player.position.x <= ender.position.x + platform.width){
            alert(Finished+ '(jumpcount)')
    }
})
// how to win
if (scrollOffset > 3000){
    console.log('You Win!')
}
if(player.position.y > canvas.height)
    init()
}

init()
animate()
// keyboard player move keyset
window.addEventListener('keydown', ({key}) => {
   
    switch (key){
        case 'ArrowLeft':
            console.log('left')
            keys.left.pressed = true
            break
         case 'ArrowUp':
            console.log('up')
            
            if (keys.up.pressed = true)
            player.velocity.y -= 10
            jumpcount++
            
            break
         case 'ArrowRight':
             keys.right.pressed = true
            console.log('right')
            
            break    
        case 'ArrowDown':
            console.log('down')
            break    
        }
        console.log(keys.right.pressed)
})
window.addEventListener('keyup', ({key}) => {
   
    switch (key){
        case 'ArrowLeft':
            console.log('left')
            keys.left.pressed = false
            break
         case 'ArrowUp':
            console.log('up')
            keys.up.pressed = true
            break
         case 'ArrowRight':
            keys.right.pressed = false
            console.log('right')
            
            break    
        case 'ArrowDown':
            console.log('down')
            break    
        }
        console.log(keys.right.pressed)
})