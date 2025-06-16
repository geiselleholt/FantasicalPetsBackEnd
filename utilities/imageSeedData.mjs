const images = [
  {
    animal1: "Monkey",
    animal2: "Mermaid",
    imageUrl:
      "https://images.deepai.org/art-image/6e9b68b30e46444cbb02cdca53195466/cartoon-image-of-a-cute-mermaid-monkey-hybrid.jpg",
    defaultName: "Chimpansea",
    defaultDescription:
      "Imagine a Mer-Monkey swinging through kelp forests and chattering with the fish! This silly creature has a shiny fish tail but still loves to climb trees on the beach. It probably eats bananas and seaweed for snacks!",
  },
  {
    animal1: "Duck",
    animal2: "Lion",
    imageUrl:
      "https://images.deepai.org/art-image/74ac98bbcda04336b51e647f3b0d0277/cartoon-image-of-a-cute-duck-lion-hybrid.jpg",
    defaultName: "Dandelion",
    defaultDescription:
      "Imagine a Dandelion prancing through the tall grass, letting out mighty Quacks! instead of roars! This fluffy-maned bird loves to splash in puddles, then dry off by shaking its feathery tail. It's the king of the pond and the jungle!",
  },
  {
    animal1: "Princess",
    animal2: "Fox",
    imageUrl:
      "https://images.deepai.org/art-image/604d856738aa46c5a39b7425710db772/cartoon-image-of-a-cute-fox-princess-hybrid.jpg",
    defaultName: "Foxy Princess",
    defaultDescription:
      "Meet the Foxy Princess, who lives in a sparkling den and always has a clever plan! She might wear a tiny crown on her pointy ears and use her bushy tail to elegantly swish away pesky bugs. She's super smart and super fancy!",
  },
  {
    animal1: "Mouse",
    animal2: "Moose",
    imageUrl:
      "https://images.deepai.org/art-image/2de468b774fb45689f5040a614df0c3b/cartoon-image-of-a-cute-moose-mouse-hybrid.jpg",
    defaultName: "Moosie-Mouse",
    defaultDescription:
      "Meet the Moosie-Mouse, a tiny friend with giant antlers who loves cheese and nibbling on leaves! Even though it's small, it has a big, booming squeak that can be heard across the forest. Don't forget to offer it a tiny acorn, its favorite snack!",
  },
  {
    animal1: "Unicorn",
    animal2: "Elephant",
    imageUrl:
      "https://images.deepai.org/art-image/3edd514e88e0446ca4faf0143117a66f/cartoon-image-of-a-cute-elephant-unicorn-mix.jpg",
    defaultName: "Uniphant",
    defaultDescription:
      "Say hello to the Uniphant, a gentle giant with a sparkly, swirly horn right on its head! This magical buddy uses its long trunk to sprinkle glitter, not water, and loves to trumpet beautiful, twinkly tunes. It's the most majestic friend you'll ever meet!",
  },
  {
    animal1: "Fox",
    animal2: "Panda",
    imageUrl:
      "https://images.deepai.org/art-image/1a7ee1d7129d47b5b55d2a9378131a5b/cartoon-image-of-a-cute-fox-panda-mix-48cf0e.jpg",
    defaultName: "Fandax",
    defaultDescription:
      "Meet the Fandax, a super fluffy friend with a bushy red tail and adorable black eye patches! This playful pal loves to pounce through bamboo forests and tell silly jokes. It's the sneakiest and cuddliest creature around!",
  },
  {
    animal1: "Bear",
    animal2: "Owl",
    imageUrl:
      "https://images.deepai.org/art-image/e409efc10ddc41ee820ebbe70519b2b8/cartoon-image-of-a-cute-bear-owl-mix.jpg",
    defaultName: "Hooty-Paws",
    defaultDescription:
      "Look up in the trees, and you might spot a Hooty-Paws, a wise friend with big, sleepy eyes and fluffy bear ears! This unique creature hoots instead of roars and gives the best, most silent hugs. It loves honey, especially if it's found in a tree hollow!",
  },
  {
    animal1: "Bee",
    animal2: "Pig",
    imageUrl:
      "https://images.deepai.org/art-image/dc94f342ba654dcc9f797e060c728c35/cartoon-image-of-a-cute-bee-pig-mix-6a36ad.jpg",
    defaultName: "Honey-Ham",
    defaultDescription:
      "Watch out for the Honey-Ham, a buzzing buddy who loves to roll in the mud and make sweet honey! This silly critter has tiny wings and a curly tail, and you might hear it oinking a happy tune as it flies around looking for flowers. Just don't try to take its honey, it might give you a little piggy-sting!",
  },
  {
    animal1: "Elephant",
    animal2: "Turtle",
    imageUrl:
      "https://images.deepai.org/art-image/417ca88b8de9418186cedd607a1e3693/cartoon-image-of-a-cute-elephant-turtle-mix-81c8ea.jpg",
    defaultName: "Shell-ephant",
    defaultDescription:
      "Look out for the Shell-ephant, a super strong friend who carries its home on its back! This slow and steady pal loves to splash around with its trunk, and when it's tired, it just pulls its head and legs right into its giant shell for a nap. It's the best at hide-and-seek!",
  },
  {
    animal1: "Frog",
    animal2: "Mermaid",
    imageUrl:
      "https://images.deepai.org/art-image/f20db72643654e288461eebbbf498345/cartoon-image-of-a-cute-frog-mermaid-mix-fe8460.jpg",
    defaultName: "Ribbit-Tail",
    defaultDescription:
      "Get ready for the Ribbit-Tail, a silly friend who loves to sing splashy songs in the pond and dive deep under lily pads! This hopping hero has super sticky webbed hands to catch flies, but also a shiny, scaly tail for zooming through the water. It's the best at both jumping high and swimming fast!",
  },
  {
    animal1: "Pig",
    animal2: "Shark",
    imageUrl:
      "https://images.deepai.org/art-image/2f2f57364fdf4573b63bfbe4f2eb2a0c/cartoon-image-of-a-cute-pig-shark-mix-895e87.jpg",
    defaultName: "Oink-Jaws",
    defaultDescription:
      "Watch out for the Oink-Jaws, a piggy pal with a powerful tail and a super silly smile full of tiny teeth! This unique swimmer loves to zoom through the ocean, snorting happily as it looks for yummy seaweed snacks. Don't worry, it's more interested in playing tag than munching on toes!",
  },
  {
    animal1: "Bear",
    animal2: "Princess",
    imageUrl:
      "https://images.deepai.org/art-image/1495625fed8847aab30f728a82b53308/cartoon-image-of-a-cute-bear-princess-mix-d6b9df.jpg",
    defaultName: " Princess Paws",
    defaultDescription:
      "Imagine Princess Paws, a fluffy friend who loves to wear a tiny crown and give the warmest hugs! This fancy pal can roar like a bear but also curtsey like a princess, and loves to nap in cozy caves. Just make sure to bring extra berries for a snack, because this royal is always hungry!",
  },
  {
    animal1: "Tiger",
    animal2: "Turtle",
    imageUrl:
      "https://images.deepai.org/art-image/75716668ca734e7e8ffcac9df52d1582/cartoon-image-of-a-cute-tiger-turtle-mix.jpg",
    defaultName: "Tigertle",
    defaultDescription:
      "Imagine a Tigertle, a striped swimmer who loves to sunbathe on rocks and roar while it's catching fish! This fierce friend has a super-strong shell and loves to chase after toys, even if it's slow. It's the king of both the jungle and the deep blue sea!",
  },
  {
    animal1: "Kitten",
    animal2: "Axolotl",
    imageUrl:
      "https://images.deepai.org/art-image/c401c945b60d4cdb96992bc4e4c2ec16/cartoon-image-of-a-cute-axolotl-kitten-mix-856817.jpg",
    defaultName: "Axol-Kitty",
    defaultDescription:
      "Get ready for the Axol-Kitty, a super cute friend with feathery gills and whiskers that wiggle when it purrs underwater! This playful pal loves to splash and chase shiny bubbles, then curl up for a cat-nap in a cozy lily pad. It's the most adorable fish and furball you'll ever meet!",
  },
  {
    animal1: "Fox",
    animal2: "Tiger",
    imageUrl:
      "https://images.deepai.org/art-image/e0b24c64b8c74396871c7d045831e8e2/cartoon-image-of-a-cute-fox-tiger-mix-e0173d.jpg",
    defaultName: "Stripy-Sly",
    defaultDescription:
      "Meet Stripy-Sly, a super speedy pal with fiery stripes and a bushy tail for balancing! This cunning creature loves to play hide-and-seek in the tall grass, then pounce with a playful growl. It's the most clever and striped friend in the whole forest!",
  },
  {
    animal1: "Moose",
    animal2: "Kitten",
    imageUrl:
      "https://images.deepai.org/art-image/2c0070643e0a44b0b77ae33f340c5fa4/cartoon-image-of-a-cute-kitten-moose-mix-a5d704.jpg",
    defaultName: "Meow-se",
    defaultDescription:
      "Look out for the Meow-se, a tiny friend with little antlers who loves to pounce on yarn balls! This cute creature can purr like a kitty but also makes silly moo sounds when it's hungry for milk. It's the most adorable big-and-small pal in the whole wide world!",
  },
  {
    animal1: "Owl",
    animal2: "Shark",
    imageUrl:
      "https://images.deepai.org/art-image/0e0dc2a23dbd4c64abbf2bf24379d9f2/cartoon-image-of-a-cute-owl-shark-mix.jpg",
    defaultName: "Hooter Jaws",
    defaultDescription:
      "Dive in and meet the Hooter Jaws, a wise swimmer with big, round eyes that can see in the darkest parts of the ocean! This special friend glides silently through the water, sometimes letting out a soft Hoo-hoo! as it searches for yummy fish snacks. It's the smartest fish and bird you'll ever find!",
  },
  {
    animal1: "Robot",
    animal2: "Crocodile",
    imageUrl:
      "https://images.deepai.org/art-image/6c49c73e77df4db79c2d454955926f9e/cartoon-image-of-a-cute-crocodile-robot-mix.jpg",
    defaultName: "Meow-se",
    defaultDescription:
      "Look out for the Meow-se, a tiny friend with little antlers who loves to pounce on yarn balls! This cute creature can purr like a kitty but also makes silly moo sounds when it's hungry for milk. It's the most adorable big-and-small pal in the whole wide world!",
  },
  {
    animal1: "Monkey",
    animal2: "Pirate",
    imageUrl:
      "https://images.deepai.org/art-image/d3353c4936b648abbbb1324fae9d26cb/cartoon-image-of-a-cute-monkey-pirate-mix-13e3d1.jpg",
    defaultName: "Swashbuckler Chimp",
    defaultDescription:
      "Ahoy, matey! Look out for the Swashbuckler Chimp, a super silly scallywag who swings from ship masts and loves to find buried treasure! This playful pal chatters like a monkey but squawks like a parrot, always on the lookout for shiny gold doubloons. They're the best at swabbing the deck and swinging through the jungle!",
  },
  {
    animal1: "Fox",
    animal2: "Tiger",
    imageUrl:
      "https://images.deepai.org/art-image/088bfc98d6c746eb8ce6a3dea9edb742/cartoon-image-of-a-cute-fox-tiger-mix.jpg",
    defaultName: "Whisker-Stripe",
    defaultDescription:
      "Meet Whisker-Stripe, a super speedy pal with fiery stripes and a bushy tail for balancing! This cunning creature loves to play hide-and-seek in the tall grass, then pounce with a playful growl. It's the most clever and striped friend in the whole forest!",
  },
  {
    animal1: "Tiger",
    animal2: "Lion",
    imageUrl:
      "https://images.deepai.org/art-image/79c6910a62974a45ac1dd2024fc3173a/cartoon-image-of-a-cute-lion-tiger-mix-b69145.jpg",
    defaultName: "Liger",
    defaultDescription:
      "Get ready for this Striped Roarer, a mighty friend with a fluffy mane and cool stripes, who loves to play! This powerful pal can let out a huge roar that shakes the jungle, then pounce playfully like a giant kitten. It's the king of the jungle and the savannah, all in one!",
  },
  {
    animal1: "Monkey",
    animal2: "Moose",
    imageUrl:
      "https://images.deepai.org/art-image/7febf2599bbe46348dbff93a13584394/cartoon-image-of-a-cute-monkey-moose-mix.jpg",
    defaultName: "Branch-Antler",
    defaultDescription:
      "Swing on over and meet the Branch-Antler, a silly pal who loves to chatter and climb big trees with its tiny antlers! This playful friend can munch on leaves like a moose, but also loves to swing through the branches. It's the most goofy and tall tree-climber you'll ever see!",
  },
  {
    animal1: "Mouse",
    animal2: "Dragon",
    imageUrl:
      "https://images.deepai.org/art-image/3fafe9db460b4ea6980857e1d00464a1/cartoon-image-of-a-cute-dragon-mouse-mix.jpg",
    defaultName: "Whisker-Wing",
    defaultDescription:
      "Look out for the Whisker-Wing, a tiny friend with leathery wings who loves to zoom around your house at super speed! This little pal might breathe teeny puffs of smoke when it's excited and loves to nibble on cheese, especially if it's toasted with a tiny fire. It's the bravest little creature with the biggest heart!",
  },
  {
    animal1: "Cow",
    animal2: "Dolphin",
    imageUrl:
      "https://images.deepai.org/art-image/2f4f336cd87443e997418306925d1f01/cartoon-image-of-a-cute-cow-dolphin-mix-6a197a.jpg",
    defaultName: "Moo-phin",
    defaultDescription:
      "Get ready for the Moo-phin, a silly swimmer who loves to say Moo! underwater! This splashy pal has flippers and hooves, and loves to eat seaweed snacks. It's the silliest friend from the farm and the sea!",
  },
  {
    animal1: "Turtle",
    animal2: "Cowboy",
    imageUrl:
      "https://images.deepai.org/art-image/2289e4d3cad74b208a93d8435be899c8/cartoon-image-of-a-cute-cowboy-turtle-mix.jpg",
    defaultName: "Shell-Rider",
    defaultDescription:
      "Yee-haw! Meet the Shell-Rider, a slow and steady hero who wears a tiny ten-gallon hat on their shell! This rootin' tootin' pal loves to carry a mini lasso and chase after tumbleweeds across the desert. They're the toughest little cowboy in the West, ready for any adventure!",
  },
  {
    animal1: "Moose",
    animal2: "Shark",
    imageUrl:
      "https://images.deepai.org/art-image/43a9548ee62f4d3aae1e605206eab5aa/cartoon-image-of-a-cute-moose-shark-mix.jpg",
    defaultName: "Chomper Antlers",
    defaultDescription:
      "Look out for Chomper-Antlers, a super big friend with giant antlers who loves to swim in the deep, dark ocean! This powerful pal uses its mighty fins to zoom past boats, and sometimes you can hear its funny moo sound echoing underwater. It's the king of the forest and the sea, all in one super swimmer!",
  },
  {
    animal1: "Princess",
    animal2: "Big Foot",
    imageUrl:
      "https://images.deepai.org/art-image/148df86f547d40dfa3a6d3ed747ebfce/cartoon-image-of-a-cute-big-foot-princess-mix.jpg",
    defaultName: "Princess Sasquatch",
    defaultDescription:
      "Meet Princess Sasquatch, a super tall friend who loves to wear a sparkly crown but leaves giant footprints wherever she tiptoes! This majestic pal might have really long, wild hair but still loves to sing songs to the forest animals. She's the best at hiding in plain sight and finding the prettiest flowers!",
  },
  {
    animal1: "Kitten",
    animal2: "Unicorn",
    imageUrl:
      "https://images.deepai.org/art-image/2d27541db39841dbb120635a8c551a0e/cartoon-image-of-a-cute-kitten-unicorn-mix.jpg",
    defaultName: "Whisker-Horn",
    defaultDescription:
      "Say hello to the Whisker-Horn, a magical friend with a sparkly horn and super soft fur! This purr-fect pal loves to chase glittery butterflies and make everything around it shine. It's the most enchanting and cuddliest little creature you'll ever meet!",
  },
  {
    animal1: "Tiger",
    animal2: "Owl",
    imageUrl:
      "https://images.deepai.org/art-image/6386e0746a144987ae2d985709a595d5/cartoon-image-of-a-cute-owl-tiger-mix.jpg",
    defaultName: "Bamboo Striper",
    defaultDescription:
      "Look up in the trees and you might spot the Striped Hooter, a wise friend with bright, glowing eyes and cool stripes! This special pal loves to silently swoosh through the night, then pounce with a playful hoot-roar. It's the most stealthy hunter of the forest and sky!",
  },
  {
    animal1: "Duck",
    animal2: "Bee",
    imageUrl:
      "https://images.deepai.org/art-image/129d8c6de96540ee8a1a5666790d8064/cartoon-image-of-a-cute-bee-duck-mix.jpg",
    defaultName: "Buzzy Quacker",
    defaultDescription:
      "Listen closely for the Buzzy Quacker, a silly friend who loves to splash in puddles and buzz from flower to flower! This feathery pal has tiny wings and loves to collect nectar to make yummy honey, then waddle back to its cozy nest. It's the sweetest little swimmer you'll ever meet!",
  },
  {
    animal1: "Moose",
    animal2: "Eagle",
    imageUrl:
      "https://images.deepai.org/art-image/efe3cecc293749849b86c2d6ed81c77d/cartoon-image-of-a-cute-eagle-moose-mix.jpg",
    defaultName: "Sky-Antler",
    defaultDescription:
      "Look way up for the Sky-Antler, a giant friend soaring through the clouds with huge antlers and powerful wings! This majestic pal loves to swoop down and grab fish from the rivers, then fly back up to its nest on top of the tallest mountains. It's the king of the forest and the sky!",
  },
  {
    animal1: "Cow",
    animal2: "Tiger",
    imageUrl:
      "https://images.deepai.org/art-image/eb3bfd6730c4487899c25be311e49bf9/cartoon-image-of-a-cute-cow-tiger-mix.jpg",
    defaultName: "Moo-Stripes",
    defaultDescription:
      "Watch out for the Moo-Stripes, a farm friend with fierce stripes who loves to munch on grass and play hide-and-seek! This playful pal can give gentle moos, but also loves to pounce like a big cat in the pasture. It's the most spotted and striped buddy on the farm!",
  },
  {
    animal1: "Bee",
    animal2: "Frog",
    imageUrl:
      "https://images.deepai.org/art-image/8fe969dbed3c4801bfa9aa801d58f302/cartoon-image-of-a-cute-bee-frog-mix.jpg",
    defaultName: "Hopping Hummer",
    defaultDescription:
      "Listen closely for the Hopping Hummer, a tiny friend who loves to buzz around the lily pads and catch flies with its long, sticky tongue! This silly pal has webbed feet for jumping but also tiny wings for flying from flower to flower. It's the best at both ribbiting and making sweet honey!",
  },
  {
    animal1: "Elephant",
    animal2: "Dolphin",
    imageUrl:
      "https://images.deepai.org/art-image/511546dafea4437384a2ad52b2d8e9a6/cartoon-image-of-a-cute-dolphin-elephant-mix.jpg",
    defaultName: "Trunk-Fins",
    defaultDescription:
      "Dive deep and meet the Trunk-Fins, a super smart friend who loves to trumpet bubbly songs underwater! This big, gentle pal uses its long trunk to squirt water high into the air and loves to play tag with its flippers. It's the most majestic swimmer and land giant all rolled into one!",
  },
  {
    animal1: "Elephant",
    animal2: "Moose",
    imageUrl:
      "https://images.deepai.org/art-image/1f01f25c69564869808564fca37027f1/cartoon-image-of-a-cute-elephant-moose-mix.jpg",
    defaultName: "Moo-sephants",
    defaultDescription:
      "Stomp on over and meet the Moo-sephants, a giant friend with super big ears and magnificent antlers, who loves to munch on leaves! This gentle giant uses its long trunk to pick yummy berries and sometimes lets out a low rumble that sounds like a happy trumpet. It's the biggest, friendliest pal in the whole wide forest!",
  },
  {
    animal1: "Kitten",
    animal2: "Mermaid",
    imageUrl:
      "https://images.deepai.org/art-image/b5fbb1bc1e4e43429196191615fcfc50/cartoon-image-of-a-cute-kitten-mermaid-mix.jpg",
    defaultName: "Purr-maid",
    defaultDescription:
      "Get ready for the Purr-maid, a super cute friend with a shiny, scaly tail and soft, fluffy ears! This playful pal loves to splash in the water and chase sparkly fish, then climb onto a sunny rock for a purr-fect nap. It's the most adorable swimmer and snuggler in the whole ocean!",
  },
  {
    animal1: "Snake",
    animal2: "Robot",
    imageUrl:
      "https://images.deepai.org/art-image/30d5fc5b9fe840ac9ccf11535e74f0b9/cartoon-image-of-a-cute-robot-snake-mix.jpg",
    defaultName: "Circuit-Slither",
    defaultDescription:
      "Check out the Circuit-Slither, a super cool friend who loves to zoom around with its metal body and slithery moves! This high-tech pal can coil up like a spring or stretch out super long to reach far-away places. It's the sneakiest and sparkiest buddy you'll ever meet!",
  },
  {
    animal1: "Monster",
    animal2: "Duck",
    imageUrl:
      "https://images.deepai.org/art-image/4a0bf15a422442cdb8c3591d9aaf4f04/cartoon-image-of-a-cute-duck-monster-mix.jpg",
    defaultName: "Quack-Zilla",
    defaultDescription:
      "Watch out for Quack-Zilla, a super big friend who loves to stomp around and let out a mighty QUACK-ROAR! This silly monster-duck has giant, webbed feet and feathery wings, and it loves to splash in the biggest puddles it can find. But don't worry, it's more silly than scary!",
  },
  {
    animal1: "Owl",
    animal2: "Crab",
    imageUrl:
      "https://images.deepai.org/art-image/33a4475bfc894ff2a890d7cc30b688bc/cartoon-image-of-a-cute-crab-owl-mix.jpg",
    defaultName: "Hoot 'n' Snip",
    defaultDescription:
      "Meet Hoot 'n' Snip, the silliest creature you'll ever see! This feathery friend has big, round owl eyes and a beak, but instead of legs, it has crab claws! It loves to scuttle sideways and say Hoo-CRAB!",
  },
  {
    animal1: "Dragon",
    animal2: "Monkey",
    imageUrl:
      "https://images.deepai.org/art-image/dbf9970324d745cca5d3760066e6c677/cartoon-image-of-a-cute-dragon-monkey-mix.jpg",
    defaultName: "Scaley-Swinger",
    defaultDescription:
      "Watch out for the Scaley-Swinger, a super silly friend with shiny scales who loves to swing through the trees! This playful pal might breathe tiny puffs of smoke when it's excited and loves to chatter loudly as it flies from branch to branch. It's the most mischievous and magical buddy in the whole forest!",
  },
  {
    animal1: "Lion",
    animal2: "Butterfly",
    imageUrl:
      "https://images.deepai.org/art-image/2159579388514583839276522f6d7673/cartoon-image-of-a-cute-butterfly-lion-hybrid-263152.jpg",
    defaultName: "Flutter Flutter Roar Roar",
    defaultDescription:
      "Behold the Fluttermane, a majestic beast with the body of a lion and the wings of a butterfly! This silly creature loves to roar and flutter through the skies, leaving a trail of glitter wherever it goes. It's the king of the jungle and the most fabulous flyer in the world!",
  },
  {
    animal1: "Moose",
    animal2: "Tiger",
    imageUrl:
      "https://images.deepai.org/art-image/31889fefa16c48d3a23b1e27cb26ac5b/cartoon-image-of-a-cute-moose-tiger-mix.jpg",
    defaultName: "Stripy-Hooves",
    defaultDescription:
      "Imagine the Stripy-Hooves, a big, stripy friend with giant antlers who loves to roam the snowy forests! This unusual pal might nibble on leaves one minute and then playfully pounce like a tiger the next. It's the most surprising and majestic creature you'll ever see in the woods!",
  },
  {
    animal1: "Dragon",
    animal2: "Bear",
    imageUrl:
      "https://images.deepai.org/art-image/eee0ead1a9bd41cab17c86d168899758/cartoon-image-of-a-cute-smiling-bear-dragon-hybrid-ec.jpg",
    defaultName: "Beary Firey",
    defaultDescription:
      "Say hello to Beary Firey, a cuddly critter with the heart of a bear and the fiery spirit of a dragon! This fluffy friend loves to give warm hugs and might accidentally set your marshmallows on fire when it roars. It's the coziest and most fearsome creature in the land!",
  },
  {
    animal1: "Fox",
    animal2: "Octopus",
    imageUrl:
      "https://images.deepai.org/art-image/7a74c628f7944606a559fed526844df1/cartoon-image-of-a-cute-smiling-fox-octopus-hybrid-wi.jpg",
    defaultName: "Foxtopus",
    defaultDescription:
      "Meet the Foxy-Arms, a clever critter with the cunning of a fox and the grabby arms of an octopus! This tentacled trickster loves to play hide-and-seek in coral reefs and might try to steal your snacks with its eight sneaky arms. It's the most intelligent and mischievous creature in the sea!",
  },
  {
    animal1: "Shark",
    animal2: "Bee",
    imageUrl:
      "https://images.deepai.org/art-image/27273f2359a64ddda19987093b291bf1/cartoon-image-of-a-cute-bee-shark-mix.jpg",
    defaultName: "Buzz-Fin",
    defaultDescription:
      "Watch out for the Buzz-Fin, a tiny but mighty friend who zips through the ocean with buzzing wings and a little sharky fin! This special pal loves to collect nectar from colorful coral and might give a tiny buzz-snap! if you get too close to its honey-comb reef. It's the sweetest little swimmer you'll ever meet!",
  },
  {
    animal1: "Butterfly",
    animal2: "Robot",
    imageUrl:
      "https://images.deepai.org/art-image/407d40470f3f4fb08b4b2854ad873724/cartoon-image-of-a-cute-butterfly-robot-mix-f03dba.jpg",
    defaultName: "Flutter-Bot",
    defaultDescription:
      "Behold the Flutter-Bot, a high-tech friend with the grace of a butterfly and the brains of a robot! This metallic marvel loves to zoom through gardens, pollinating flowers with its whirring wings and maybe even leaving a little trail of oil. It's the most elegant and efficient creature you'll ever see in the digital meadow!",
  },
  {
    animal1: "Kitten",
    animal2: "Pig",
    imageUrl:
      "https://images.deepai.org/art-image/058578417aca4371b3a8f385ed269a3d/cartoon-image-of-a-cute-pig-kitten-mix.jpg",
    defaultName: "Oink-Purr",
    defaultDescription:
      "Say hello to the Oink-Purr, a super cute friend with a curly tail and whiskers that loves to roll in mud puddles and chase string! This playful pal might make tiny oink sounds when it's happy and then curl up for a purr-fect nap in a sunbeam. It's the most adorable farm and house pet you'll ever meet!",
  },
  {
    animal1: "Unicorn",
    animal2: "Dolphin",
    imageUrl:
      "https://images.deepai.org/art-image/51350ec3e0bc4850a6267088a3c5c34e/cartoon-image-of-a-cute-dolphin-unicorn-hybrid.jpg",
    defaultName: "Uni-Fin",
    defaultDescription:
      "Prepare to be amazed by the Uni-Fin, a majestic friend with the horn of a unicorn and the playful spirit of a dolphin! This magical marvel loves to leap through the waves, leaving a trail of glittery rainbows. It's the most enchanting swimmer you'll ever meet in the mystical seas!",
  },
  {
    animal1: "Horse",
    animal2: "Dolphin",
    imageUrl:
      "https://images.deepai.org/art-image/9d8eff13cbb24eb7bf79e7640a06fe4f/cartoon-image-of-a-cute-dolphin-horse-hybrid.jpg",
    defaultName: "Galloping Fins",
    defaultDescription:
      "Splash into fun with the Galloping Fins, a majestic friend with powerful hooves and a sleek dolphin tail! This amazing pal loves to race through the ocean like a wild stallion, leaping over waves with a happy whinny. It's the swiftest swimmer and the most graceful sea-steed you'll ever see!",
  },
  {
    animal1: "Mouse",
    animal2: "Puppy",
    imageUrl:
      "https://images.deepai.org/art-image/b4d6825138634d95bc56fdd60ae95862/cartoon-image-of-a-cute-puppy-mouse-hybrid.jpg",
    defaultName: "Squeak-Hound",
    defaultDescription:
      "Watch out for the Squeak-Hound, a tiny but loyal friend with big floppy ears and a little squeaky voice! This curious pal loves to sniff around and might try to bark, but it usually comes out as a cute little squeak instead. It's the smallest and most adorable guard dog you'll ever have!",
  },
  {
    animal1: "Kitten",
    animal2: "Mouse",
    imageUrl:
      "https://images.deepai.org/art-image/7ca2a2f4a3014a2fb8ccf929f945c5de/cartoon-image-of-a-cute-kitten-mouse-mix.jpg",
    defaultName: "Squeeker-Pouncer",
    defaultDescription:
      "Say hello to the Squeeker-Pouncer, a tiny friend with big ears and super soft fur who loves to play hide-and-seek! This adorable pal can scamper super fast but also loves to curl up for a purr-fect nap. It's the cutest little pouncer and cuddler you'll ever meet!",
  },
  {
    animal1: "Koala",
    animal2: "Eagle",
    imageUrl:
      "https://images.deepai.org/art-image/d61d4dfc59054c10957440eeb805f9a6/cartoon-image-of-a-cute-eagle-koala-mix-02d593.jpg",
    defaultName: "Sky-Clinger",
    defaultDescription:
      "Meet the Sky-Clinger, a super chill friend with soft, fluffy ears who loves to soar high in the sky and nap in tall eucalyptus trees! This unique pal can swoop down with its mighty wings and then gently cling to branches with its sharp claws. It's the most relaxed flyer and tree-hugger you'll ever find!",
  },
  {
    animal1: "Koala",
    animal2: "Pig",
    imageUrl:
      "https://images.deepai.org/art-image/b533192d11eb4386a39b5579b13161e0/cartoon-image-of-a-cute-pig-koala-mix.jpg",
    defaultName: "Snuggle-Snout",
    defaultDescription:
      "Get ready for the Snuggle-Snout, a super cute friend with a little pink nose who loves to munch on eucalyptus leaves and roll in soft mud! This sweet pal can climb trees with its fuzzy paws and loves to nap for hours, sometimes letting out a tiny, happy oink in its sleep. It's the most adorable tree-hugger and puddle-player you'll ever meet!",
  },
  {
    animal1: "Panda",
    animal2: "Pig",
    imageUrl:
      "https://images.deepai.org/art-image/463d09ea88ce4ede8c2e46654faea0f0/cartoon-image-of-a-cute-pig-panda-mix.jpg",
    defaultName: "Bamboo-Belly",
    defaultDescription:
      "Say hello to the Bamboo-Belly, a super cute friend who loves to roll in the mud and munch on crunchy bamboo! This cuddly pal has soft black and white fur, a little curly tail, and might let out a happy oink-purr when it's really enjoying its snack. It's the most adorable mud-lover and leaf-eater you'll ever meet!",
  },
  {
    animal1: "Bee",
    animal2: "Panda",
    imageUrl:
      "https://images.deepai.org/art-image/af4940d8eb2d4319b1e1175b953f202e/cartoon-image-of-a-cute-bumblebee-panda-mix.jpg",
    defaultName: "Honey-Hug",
    defaultDescription:
      "Get ready for the Honey-Hug, a super fuzzy friend with the cuddly charm of a panda and the buzzing energy of a bee! This adorable pal loves to eat bamboo while flying through the air, leaving a trail of sweet honey wherever it goes. It's the most lovable flier and sweetest snuggler you'll ever meet!",
  },
  {
    animal1: "Lion",
    animal2: "Snake",
    imageUrl:
      "https://images.deepai.org/art-image/3b49334f64614057971b5c5da0fb09c6/cartoon-image-of-a-cute-snake-lion-mix.jpg",
    defaultName: "Slither-Roar",
    defaultDescription:
      "Watch out for the Slither-Roar, a slinky friend with a mighty mane and a long, scaly body! This fierce pal loves to bask in the sun like a snake but can let out a huge roar that makes the jungle rumble. It's the most surprising and powerful creature you'll ever spot!",
  },
  {
    animal1: "Robot",
    animal2: "Puppy",
    imageUrl:
      "https://images.deepai.org/art-image/891b431cdbcc45cc805eb51bc29e77b6/cartoon-image-of-a-cute-puppy-robot-mix.jpg",
    defaultName: "Circuit-Pup",
    defaultDescription:
      "Meet the Circuit-Pup, a super smart friend with a wagging tail and a happy bark that sounds a little like a whirring motor! This loyal pal loves to play fetch and can even do tricks, like a digital zoomie! It's the most high-tech and cuddly companion you'll ever have!",
  },
  {
    animal1: "Mermaid",
    animal2: "Pig",
    imageUrl:
      "https://images.deepai.org/art-image/98b79731889f4444b02b70338a27383d/cartoon-image-of-a-cute-pig-mermaid-mix.jpg",
    defaultName: "Porky-maid",
    defaultDescription:
      "Get ready for the Porky-maid, a splashy friend with a swirly tail and a cute snout who loves to snort bubbles underwater! This playful pal enjoys swimming through coral reefs and might even try to find tasty seaweed snacks. It's the silliest swimmer and the most oink-tastic creature of the sea!",
  },
  {
    animal1: "Mermaid",
    animal2: "Tiger",
    imageUrl:
      "https://images.deepai.org/art-image/9ee5bec530a243e7b18ef889c3c67030/cartoon-image-of-a-cute-tiger-mermaid-mix.jpg",
    defaultName: "Purr-maid",
    defaultDescription:
      "Watch out for the Striped Fin, a fierce and beautiful friend with the cool stripes of a tiger and a swishy mermaid tail! This majestic pal loves to hunt for fish in the deep ocean but also loves to sunbathe on rocks like a big cat. It's the most powerful and purr-fect swimmer of the sea!",
  },
  {
    animal1: "Tiger",
    animal2: "Shark",
    imageUrl:
      "https://images.deepai.org/art-image/e6ccc5f728b14b008a1c7f96d3688680/cartoon-image-of-a-cute-tiger-shark-mix.jpg",
    defaultName: "Striped Chomper",
    defaultDescription:
      "Get ready for the Striped Chomper, a fin-tastic friend with the stripes of a tiger and a snappy shark grin! This fierce pal loves to zoom through the ocean and might even try to sneak up on unsuspecting beach balls. It's the most striped and toothy creature you'll ever see!",
  },
];

export default images;
