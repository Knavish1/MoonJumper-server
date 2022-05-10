import platform from '../img/platform3.png'
import sky  from '../img/sky.png'
import background from '../img/far-grounds.png'


console.log(platform)
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const gravity = 0.5

class Mooninite {
    constructor(){
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
        else this.velocity.y = 0
             

        
    }
}
class MoonRocks {
    constructor({x, y}){
        this.position = {
            x,
            y
        }

        this.image =image
        this.width = image.width
        this.height = image.height

         
    }
    manifest(){
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}
class scenery {
  constructor({x, y}){
      this.position = {
          x,
          y
      }

      this.image =image
      this.width = image.width
      this.height = image.height

       
  }
  manifest(){
      c.drawImage(this.image, this.position.x, this.position.y)
  }
}


function createImage(imageSrc){
const image = new Image()
image.src = imageSrc
return image
}



const player = new Mooninite()

const platformImage = createImage(platform)
const platforms = [new MoonRocks({x: -1, y: 540, image: platformImage}), new MoonRocks({x: platformImage.width - 2, y: 600, image: platformImage})]

const scenery = [new scenery ({x: 0 , y: 0, image: createImage(sky)})]

const keys = {
    right: {
        pressed: false 
    },
    left: {
        pressed: false
    }
}

let scrollOffset = 0

// recursive canvas drawing/ moving user
function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)
    //console.log('go') // making sure animation is working
    
    scenery.forEach(scenery => {
      scenery.manifest()
    })

    platforms.forEach((platform) => {
        platform.manifest()
    })
    player.update()

    if(keys.right.pressed && player.position.x < 400){
        player.velocity.x = 5
    } else if (keys.left.pressed && player.position.x > 100){
        player.velocity.x = -5
    } else {
        player.velocity.x = 0

        if (keys.right.pressed){
            scrollOffset +=5
            platforms.forEach((platform) => {
            platform.position.x -= 5
        })

           
        } else if (keys.left.pressed) {
            scrollOffset -= 5
            platforms.forEach((platform) => {
            platform.position.x += 5
        })

            
        }
    }
    // platform collision statement
    platforms.forEach((platform) => {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width){
        player.velocity.y = 0
    }
})

if (scrollOffset >2000){
    console.log('You Win!')
}
}

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
            player.velocity.y -= 20
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
            player.velocity.y = 0
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