document.addEventListener("DOMContentLoaded", function() {
    const quotes = [
{
title:"Do Not Go Gentle Into That Good Night - Dylan Thomas",        
content:`Do not go gentle into that good night,
Old age should burn and rave at close of day;
Rage, rage against the dying of the light.

Though wise men at their end know dark is right,
Because their words had forked no lightning they
Do not go gentle into that good night.

Good men, the last wave by, crying how bright
Their frail deeds might have danced in a green bay,
Rage, rage against the dying of the light.

Wild men who caught and sang the sun in flight,
And learn, too late, they grieved it on its way,
Do not go gentle into that good night.

Grave men, near death, who see with blinding sight
Blind eyes could blaze like meteors and be gay,
Rage, rage against the dying of the light.

And you, my father, there on the sad height,
Curse, bless, me now with your fierce tears, I pray.
Do not go gentle into that good night.
Rage, rage against the dying of the light.`
},{
title: "Unknown",
content: `My candle burns at both ends;
    It will not last the night;
But ah, my foes, and oh, my friends—
    It gives a lovely light`,
},{
title: "Stopping by Woods on a Snowy Evening - Robert Frost",
content: 
`Whose woods these are I think I know.  
His house is in the village though;  
He will not see me stopping here  
To watch his woods fill up with snow.   

My little horse must think it queer   
To stop without a farmhouse near 
Between the woods and frozen lake  
The darkest evening of the year.   

He gives his harness bells a shake   
To ask if there is some mistake.  
The only other sound’s the sweep   
Of easy wind and downy flake.   

The woods are lovely, dark and deep,   
But I have promises to keep,   
And miles to go before I sleep,   
And miles to go before I sleep.`,
},{
title: "Bard's Curse - Malazan",
content: 
`Rage and tell me then
Not every tale is a gift
When anguish gives the knife
One more twist
And blood is thinned by tears

Cry out the injustice
Not every tale is a gift
In a world harsh with strife
Leaving us bereft
Deeds paling through the years

And I will meet your eye
Neither flinching nor shy
As I fold death inside life
And face you down
With a host of mortal fears

And I will say then
Every tale is a gift
And the scars borne by us both
Are easily missed
In the distance between us`,
},{
title: "Shake Prayer - Malazan",
content: `Open to them your hand to the shore, watch them walk into the sea.
Press upon them all they need, see them yearn for all they want.
Gift to them the calm pool of words, watch them draw the sword.
Bless upon them the satiation of peace, see them starve for war.
Grant them darkness and they will lust for light.
Deliver to them death and hear them beg for life.
Beget life and they will murder your kin.
Be as they are and they see you different.
Show wisdom and you are a fool.
The shore gives way to the sea.
And the sea, my friends,
Does not dream of you.`,
},
{
title: "Jhaampe Town - Real of The Elderlings",
content: 
`Six Wisemen came to Jhaampe-town
Climbed a hill, and never came down
Found their flesh and lost their skins
Flew away on stony wings.

Five Wisemen came to Jhaampe-town
Walked a road not up nor down
Were torn to many and turned to one,
In the end, left a task half-done

Four Wisemen came to Jhaampe-town
They spoke in words without a sound
They begged their Queen to let them go
And what became of them, no one can know.

Three Wisemen came to Jhaampe-town
They’d helped a king to keep his crown.
But when they tried to climb the hill
Down they came in a terrible spill.

Two Wisemen came to Jhaampe-town
Gentle women there they found.
Forgot their quest and lived in love
Perhaps were wiser than ones above.

One Wiseman came to Jhaampe-town.
He set aside both Queen and Crown
Did his task and fell asleep
Gave his bones to the stones to keep.

No wise men go to Jhaampe-town,
To climb the hill and never come down.
‘Tis wiser far and much more brave
To stay at home and face the grave.`
},
{
title: "Last Dance Of Chances - Real of The Elderlings",
content: 
`In that last dance of chances
I shall partner you no more.
I shall watch another turn you
As you move across the floor.

In that last dance of chances
When I bid your life goodbye
I will hope she treats you kindly.
I will hope you learn to fly.

In that last dance of chances
When I know you'll not be mine
I will let you go with longing
And the hope that you'll be fine.

In that last dance of chances
We shall know each other's minds.
We shall part with our regrets
When the tie no longer binds.`
},{
title:"Basts Poem",
content:
`Maple. Maypole
Catch and carry.
Ash and Ember.
Elderberry.
Woolen. Woman.
Moon at night.
Willow. Window.
Candlelight.
Fallow farrow.
Ash and oak.
Bide and borrow.
Chimney smoke.
Barrel. Barley.
Stone and stave.
Wind and water.
Misbehave`
}
];

    const today = new Date(); const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000); 
    const randomIndex = dayOfYear % quotes.length; 
    const quoteElement = document.getElementById("quote"); 
    if (quoteElement) { 
        quoteElement.innerHTML = `<h2>${quotes[randomIndex].title}</h2><pre>${quotes[randomIndex].content}</pre>`; 
    } 
});