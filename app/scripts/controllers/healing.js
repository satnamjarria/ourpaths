'use strict';

/**
 * @ngdoc function
 * @name outpathsApp.controller:HealingCtrl
 * @description
 * # HealingCtrl
 * Controller of the outpathsApp
 */
angular.module('outpathsApp')
  .controller('HealingCtrl', function ($scope, $rootScope,$location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.healingList = [
      'Meditations',
      'Reconciliations',
      'Practicalities',
      'Donate',
      'Volunteer',
      'Gifts'
    ];
    $rootScope.bodyClass = 'healing-page';
    $scope.sideBarToggle = true;
    $scope.activeSideItem = 6;
    $scope.sideBarToggle = true;
    $scope.toggleSidebar = function(){
      $scope.sideBarToggle = !$scope.sideBarToggle;
    };
    $scope.hideSidebar = function(){
      $scope.sideBarToggle = true;
    };
    $scope.responseJson = {
      quotes:[
        {
          title:'On Death & Dying',
          id:'on-death',
          quotes:[
            {
              quote:'Death is nothing else but going home to God; the bond of love will be unbroken for all eternity.',
              author:'Mother Theresa',
              image:'../images/Mother-Theresa.jpg'
            },
            {
              quote:'You live on earth only for a few short years Which you call an incarnation, And then you leave your body as an outworn dress And go for refreshment to your true home in the spirit.',
              author:'White Eagle'
            },
            {
              quote:'I look upon life as a gift from God. I did nothing to earn it. Now that the time is coming to give it back, I have no right to complain.',
              author:'Joyce Cary'
            },
            {
              quote:'I wanted a perfect ending. Now I\'ve learned, the hard way, that some poems don\'t rhyme, and some stories don\'t have a clear beginning, middle, and end. Life is about not knowing, having to change, taking the moment and making the best of it, without knowing what\'s going to happen next. Delicious Ambiguity.',
              author:'Gilda Radner',
              image:'../images/gilda-radner.jpg'
            },
            {
              quote:'No one wants to die. Even people who want to go to heaven don\'t want to die to get there. And yet death is the destination we all share. No one has ever escaped it. And that is as it should be, because Death is very likely the single best invention of Life. It is Life\'s change agent. It clears out the old to make way for the new. Right now the new is you, but someday not too long from now, you will gradually become the old and be cleared away. Sorry to be so dramatic, but it is quite true.',
              author:'Steve Jobs',
              image:'../images/steve-jobs.jpg'
            },
            {
              quote:'Birth, life, and death — each took place on the hidden side of a leaf.',
              author:'Toni Morrison'
            },
            {
              quote:'As a well spent day brings happy sleep, So life well used brings happy death.',
              author:'Leonardo DaVinci',
              image:'../images/Leonardo_da_Vinci.png'
            },
            {
              quote:'Die when I may, I want it said of me by those who knew me best, that I always plucked a thistle and planted a flower where I thought a flower would grow.',
              author:'Abraham Lincoln',
              image:'../images/Abe_Lincoln.jpg'
            },
            {
              quote:'Because I have loved life, I shall have no sorrow to die.',
              author:'Amellia Burr'
            },
            {
              quote:'I like living. I have sometimes been wildly, despairingly, acutely miserable, racked with sorrow, but through it all I still know quite certainly that just to be alive is a grand thing.',
              author:'Agatha Christie'
            },
            {
              quote:'After your death you will be what you were before your birth.',
              author:'Arthur Schopenhauer'
            },
            {
              quote:'I am a humanist, which means, in part, that I have tried to behave decently without any expectation of rewards or punishment after I\'m dead.',
              author:'Kurt Vonnegut',
              image:'../images/Kurt_Vonnegut.jpg'
            },
            {
              quote:'There is but one freedom, To put oneself right with death. After that everything is possible. I cannot force you to believe in God. Believing in God amounts to coming to terms with death. When you have accepted death, the problem of God will be solved — and not the reverse.',
              author:'Albert Camus',
              image:'../images/Albert_Camus.png'
            },
            {
              quote:'A brief candle; both ends burning An endless mile; a bus wheel turning A friend to share the lonesome times A handshake and a sip of wine So say it loud and let it ring We are all a part of everything The future, present and the past Fly on proud bird You\'re free at last.',
              author:'Charlie Daniels - written en route to the funeral for his friend, Ronnie Van Zant'
            },
            {
              quote:'On lifeâs journey faith is nourishment, virtuous deeds are a shelter, wisdom is the light by day and right mindfulness is the protection by night. If a man lives a pure life, nothing can destroy him.',
              author:'Buddha',
              image:'../images/Buddha.jpg'
            },
            {
              quote:'Death? Why this fuss about death. Use your imagination; try to visualize a world without death! … Death is the essential condition of life, not an evil.',
              author:'Charlotte Perkins Gilman'
            },
            {
              quote:'Your life feels different on you, once you greet death and understand your heart\'s position. You wear your life like a garment from the mission bundle sale ever after — lightly because you realize you never paid nothing for it, cherishing because you know you won\'t ever come by such a bargain again.',
              author:'Louise Erdrich'
            },
            {
              quote:'The opposite of love is not hate, it\'s indifference. The opposite of art is not ugliness, it\'s indifference. The opposite of faith is not heresy, it\'s indifference. And the opposite of life is not death, it\'s indifference.',
              author:'Elie Wiesel (Oct. 1986)'
            },
            {
              quote:'It\'s only when we truly know and understand that we have a limited time on earth — and that we have no way of knowing when our time is up — that we will begin to live each day to the fullest, as if it was the only one we had.',
              author:'Elisabeth Kubler-Ross'
            },
            {
              quote:'We forget that we are all dead men conversing with dead men.',
              author:'Jorge Luis Borges',
              image:'../images/JorgeLuisBorges.jpg'
            },
            {
              quote:'It is foolish and wrong to mourn the men who died. Rather we should thank God that such men lived.',
              author:'Gen. George Patton',
              image:'../images/George-Patton.jpg'
            },
            {
              quote:'All but Death, can be Adjusted - Dynasties repaired Systems settled in their Sockets Citadels dissolved - Wastes of Lives - re-sown with Colors By Succeeding Springs Death – unto itself Exception Is exempt from Change -',
              author:'Emily Dickinson',
              image:'../images/Emily-Dickinson.jpg'
            },
            {
              quote:'Thus that which is the most awful of evils, death, is nothing to us, since when we exist there is no death, and when there is death we do not exist.',
              author:'Epicurus'
            },
            {
              quote:'I think we should look forward to death more than we do. Of course everybody hates to go to bed or miss anything but dying is really the only chance we\'ll get to rest.',
              author:'Florynce Kennedy'
            },
            {
              quote:'Religion is the human response to being alive and having to die.',
              author:'Forrest Church'
            },
            {
              quote:'Of course you don\'t die. Nobody dies. Death doesn\'t exist. You only reach a new level of vision, A new realm of consciousness, A new unknown world.',
              author:'Henry Miller'
            },
            {
              quote:'Some people are so afraid to die That they never begin to live.',
              author:'Henry Van Dyke'
            },
            {
              quote:'Faith is taking the first step, even when you don\'t see the whole staircase.',
              author:'Martin Luther King. Jr.',
              image:'../images/Martin_Luther_King.jpg'
            },
            {
              quote:'We forget that we are all dead men conversing with dead men.',
              author:'Jorge Luis Borges',
              image:'../images/Jorge_Luis_Borges.jpg'
            },
            {
              quote:'Too many people are thinking of security instead of opportunity. They seem to be more afraid of life than death.',
              author:'James F. Bymes'
            },
            {
              quote:'Die happily and look forward to taking up a new and better form.Like the sun, only when you set in the west can you rise in the east.',
              author:'Jelaluddin Rumi'
            },
            {
              quote:'Let children walk with Nature, let them see the beautiful blendings and communions of death and life, their joyous inseparable unity, as taught in woods and meadows, plains and mountains and streams of our blessed star, and they will learn that death is stingless indeed, and as beautiful as life.',
              author:'John Muir',
              image:'../images/John_Muir_Cane.jpg'
            },
            {
              quote:'Great is the art of beginning, but greater is the art of ending.',
              author:'Lazarus Long'
            },
            {
              quote:'I do not fear death. I had been dead for billions and billions of years before I was born, and had not suffered the slightest inconvenience from it.',
              author:'Mark Twain',
              image:'../images/Mark-Twain.jpg'
            },
            {
              quote:'If man hasn\'t discovered something that he will die for, he isn\'t fit to live.',
              author:'Martin Luther King'
            },
            {
              quote:'To fear death Is nothing other than to think oneself wise when one is not. For it is to think one knows what one does not know. No one knows whether death may not even turn out to be The greatest blessings of human beings. And yet people fear it as if they knew for certain it is the greatest evil.',
              author:'Socrates',
              image:'../images/Portrait_of_Socrates.jpg'
            },
            {
              quote:'Only those who have dared to let go Can dare to re-enter.',
              author:'Meister Eckhart'
            },
            {
              quote:'So live your life that the fear of death can never enter your heart. Trouble no one about their religion; respect others in their view, and demand that they respect yours. Love your life, perfect your life, beautify all things in your life. Seek to make your life long and its purpose in the service of your people. Prepare a noble death song for the day when you go over the great divide. Always give a word or a sign of salute when meeting or passing a friend, even a stranger, when in a lonely place. Show respect to all people and grovel to none. When you arise in the morning give thanks for the food and for the joy of living. If you see no reason for giving thanks, the fault lies only in yourself. Abuse no one and no thing, for abuse turns the wise ones to fools and robs the spirit of its vision. When it comes your time to die, be not like those whose hearts are filled with the fear of death, so that when their time comes they weep and pray for a little more time to live their lives over again in a different way. Sing your death song and die like a hero going home.',
              author:' Chief Tecumseh (Crouching Tiger) Shawnee Nation',
              image:'../images/Chief-Tecumseh.jpg'
            },
            {
              quote:'Normally we do not like to think about death. We would rather think about life. Why reflect on death? When you start preparing for death you soon realize That you must look into your life now… and come to face the truth of yourself. Death is like a mirror in which the true meaning of life is reflected.',
              author:'Sogval Rinpoche'
            },
            {
              quote:'I believe there are two sides to the phenomenon known as death, This side where we live, and the other side where we shall continue to live. Eternity does not start with death. We are in eternity now.',
              author:'Norman Vincent Peale'
            },
            {
              quote:'And now the end is near And so I face the final curtain, My friends, I\'ll say it clear, I\'ll state my case of which I\'m certain. I\'ve lived a life that\'s full, I\'ve travelled each and every highway, And more, much more than this, I did it my way.',
              author:'Paul Anka (Song "Did It My Way")',
              image:'../images/Paul-Anka.jpg'
            },
            {
              quote:'Our life is an apprenticeship to the truth that around every circle another can be drawn; that there is no end in nature, but every end is a beginning, and under every deep a lower deep opens.',
              author:'Ralph Waldo Emerson'
            },
            {
              quote:'Once you accept your own death, all of a sudden you\'re free to live. You no longer care about your reputation. You no longer care except so far as your life can be used tactically to promote a cause you believe in.',
              author:'Saul Alinsky'
            },
            {
              quote:'Death is one of two things… Either it is annihilation, and the dead have no consciousness of anything; Or, as we are told, it is really a change: A migration of the soul from one place to another.',
              author:'Socrates',
              image:'../images/Portrait_of_Socrates.jpg'
            },
            {
              quote:'When we finally know we are dying, and all other sentient beings are dying with us, we start to have a burning, almost heartbreaking sense of the fragility and preciousness of each moment and each being, and from this can grow a deep, clear, limitless compassion for all beings.',
              author:'Sogyal Rinpoche',
              image:'../images/Sogyal-Rinpoche.jpg'
            },
            {
              quote:'Death – the last sleep? No, it is the final awakening.',
              author:'Walter Scott'
            }
          ]
        },
        {
          title:'On Heaven',
          id:'on-heaven',
          quotes:[
            {
              quote:'I have always imagined that Heaven was a library.',
              author:'Jorge Luis Borges',
              image:'../images/Jorge_Luis_Borges.jpg'
            },
            {
              quote:'My life closed twice before its close; It yet remains to see If Immortality unveil A third event to me, So huge, so hopeless to conceive, As these that twice befell. Parting is all we know of heaven, And all we need of hell.',
              author:'Emily Dickinson'
            },
            {
              quote:'Man would indeed be in a poor way if he had to be restrained by fear of punishment and hope of reward after death.',
              author:'Albert Einstein',
              image:'../images/albert-einstein.png'
            },
            {
              quote:'The only thing that burns in hell is the part of you that won\'t let go of your life. Your memories, your attachments. They burn them all away, but they are not punishing you, They are freeing your soul. If your are frightened of dying and you are holding on, You all see devils tearing your life away. If you have made your peace, Then the devils are really angels freeing you from the earth.',
              author:'Meister Eckhart'
            },
            {
              quote:'Go to Heaven for the climate, Hell for the company.',
              author:'Mark Twain',
              image:'../images/Mark-Twain.jpg'
            },
            {
              quote:'Who has not found the heaven below? Will fail of it above. God\'s residence is next to mine, His furniture is love.',
              author:'Emily Dickinson'
            },
            {
              quote:'Who loves a garden still his Eden keeps, Perennial pleasures plants, and wholesome harvest reaps.',
              author:'Amos Bronson Alcott',
              image:'../images/Amos-Bronson-Alcott.jpg'
            },
            {
              quote:'Two things fill the mind with ever new and increasing wonder and awe — the starry heavens above me and the moral law within me.',
              author:'Immanuel Kant'
            },
            {
              quote:'The mind is its own place, and in itself, can make heaven of Hell, and a hell of Heaven.',
              author:'John Milton',
              image:'../images/John_Milton.jpg'
            },
            {
              quote:'We are ignorant of the Beyond Because this ignorance is the condition of our own life. Just as ice cannot know fire except by melting and vanishing.',
              author:'Jules Renard'
            },
            {
              quote:'Live a good life. If there are gods and they are just, then they will not care how devout you have been, but will welcome you based on the virtues you have lived by. If there are gods, but unjust, then you should not want to worship them. If there are no gods, then you will be gone, but will have lived a noble life that will live on in the memories of your loved ones. I am not afraid.',
              author:'Marcus Aurelius',
              image:'../images/Marcus-Aurelius.jpg'
            },
            {
              quote:'I feel no need for any other faith than my faith in the kindness of human beings. I am so absorbed in the wonder of earth and the life upon it that I cannot think of heaven and angels.',
              author:'Pearl S. Buck'
            },
            {
              quote:'I believe in one God, and no more; and I hope for happiness beyond this life.I believe in the equality of man; and I believe that religious duties consist in doing justice, loving mercy, and endeavoring to make our fellow creatures happy',
              author:'Thomas Paine',
              image:'../images/Thomas-Paine.jpg'
            }
          ]
        },
        {
          title:'On Grieving',
          id:'on-grieving',
          quotes:[
            {
              quote:'The bitterest tears shed over graves are for words left unsaid and deeds left undone.',
              author:'Harriet Beecher Stowe',
              image:'../images/Beecher-Stowe.jpg'
            },
            {
              quote:'Down, down, down into the darkness of the grave Gently they go, the beautiful, the tender, the kind; Quietly they go the intelligent, the witty, the brave. I know. But I do not approve. And I am not resigned.',
              author:'Edna St. Vincent Millay'
            },
            {
              quote:'Look well into thyself; there is a source of strength which will always spring up if thou will always look there.',
              author:'Marcus Aurelius',
              image:'../images/Marcus-Aurelius.jpg'
            },
            {
              quote:'You\'re searching, Joe, for things that don\'t exist; I mean beginnings. Ends and beginnings — there are no such things. There are only middles.',
              author:'Robert Frost',
              image:'../images/Robert_Frost.jpg'
            },
            {
              quote:'Do not be daunted by the enormity of the world\'s grief. Do justly, now. Love mercy, now. Walk humbly, now. You are not obligated to complete the work, but neither are you free to abandon it.',
              author:'Talmud (attributed)'
            },
            {
              quote:'Every man can master a grief but he that hath it.',
              author:'William Shakespeare',
              image:'../images/Shakespeare.jpg'
            },
            {
              quote:'The pain passes, but the beauty remains.',
              author:'Pierre August Renoir',
              image:'../images/Pierre-Auguste_Renoir.jpg'
            },
            {
              quote:'It doesn\'t matter who my father was; it matters who I remember he was.',
              author:'Anne Sexton'
            },
            {
              quote:'Do not surrender your grief so quickly Let it cut more deeply Let it ferment and season you As few human or divine ingredients can.',
              author:'Hafiz of Persia'
            },
            {
              quote:'As only New Yorkers know, if you can get through the twilight, you\'ll live through the night.',
              author:'Dorothy Parker',
              image:'../images/Young_Dorothy_Parker.jpg'
            },
            {
              quote:'He that conceals his grief finds no remedy for it.',
              author:'Turkish proverb'
            },
            {
              quote:'Grief can awaken us to new values and new and deeper appreciations. Grief can cause us to reprioritize things in our lives, to recognize what\'s really important and put it first. Grief can heighten our gratitude as we cease taking the gifts life bestows on us for granted. Grief can give us the wisdom of being with death. Grief can make death the companion on our left who guides us and gives us advice. None of this growth makes the loss good and worthwhile, but it is the good that comes out of the bad.',
              author:'Roger Bertschausen'
            },
            {
              quote:'The secret of health for both mind and body is not to mourn for the past, not to worry about the future, not to anticipate troubles, but to live in the present moment wisely and earnestly.',
              author:'Buddha',
              image:'../images/Buddha.jpg'
            },
            {
              quote:'We have to believe that even the briefest of human connections can heal. Otherwise, life is unbearable.',
              author:'Agate Nesaule'
            },
            {
              quote:'There is neither happiness nor misery in the world; there is only the comparison of one state to another, nothing more. He who has felt the deepest grief is best able to experience supreme happiness. We must have felt what it is to die, that we may appreciate the enjoyments of life.',
              author:'Alexandre Dumas',
              image:'../images/Alexandre-Dumas.jpg'
            },
            {
              quote:'He, who has gone, So we but cherish his memory, abides with us, More potent, nay, more present than the living man.',
              author:'Antoine de Saint-Exupery',
              image:'../images/Saint-Exupery.jpg'
            },
            {
              quote:'For everything there is a season, And a time for every matter under heaven:  A time to be born and a time to die; A time to plant, and a time to pluck up what is planted; A time to kill and a time to heal; A time to break down and a time to build up; A time to weep, and a time to laugh; A time to mourn and a time to dance; A time to throw away stones and a time to gather stones together; A time to embrace, and a time to refrain from embracing; A time to seek and a time to lose; A time to keep, and a time to throw away; A time to tear, and a time to sew; A time to keep silence and a time to speak; A time to love, and a time to hate, A time for war, and a time for peace.',
              author:'Ecclesiastes 3:1-8'
            },
            {
              quote:'One cannot be deeply responsive to the world without being saddened very often.',
              author:'Erich Fromm'
            },
            {
              quote:'The excursion is the same when you go looking for your sorrow as when you go looking for your joy.',
              author:'Eudora Welty',
              image:'../images/Eudora-Welty.jpg'
            },
            {
              quote:'When we honestly ask ourselves which person in our lives means the most to us, we often find that it is those who, instead of giving much advice, solutions or cures, have chosen rather to share our pain and touch our wounds with a gentle and tender hand. The friend who can be silent with us in a moment of despair or confusion, who can stay with us in an hour of grief and bereavement, who can tolerate not knowing, not curing, not healing, and face with us the reality of our powerlessness, that is a friend who cares.',
              author:'Henri Nouwen'
            },
            {
              quote:'Every man has his secret sorrows which the world knows not; and often times we call a man cold when he is only sad.',
              author:'Henry Wadsworth Longfellow'
            },
            {
              quote:'Action is the antidote to despair.',
              author:'Joan Baez',
              image:'../images/Joan-Baez.jpg'
            },
            {
              quote:'Participate joyfully in the sorrows of the world. We cannot cure the world of sorrows, but we can choose to live in joy.',
              author:'Joseph Campbell',
              image:'../images/Joseph_Campbell.png'
            },
            {
              quote:'We pass and leave you lying. No need for rhetoric, for funeral music, for melancholy bugle-calls. No need for tears now, no need for regret. We took our risk with you; you died and we live. We take your noble gift, salute for the last time those lines of pitiable crosses, those solitary mounds, those unknown graves, and turn to live our lives out as we may. Which of us were fortunate — who can tell? For you there is silence and cold twilight drooping in awful desolation over those motionless lands. For us sunlight and the sound of women\'s voices, song and hope and laughter, despair, gaiety, love — life. Lost terrible silent comrades, we, who might have died, salute you.',
              author:'Richard Aldington'
            },
            {
              quote:'In three words I can sum up everything I\'ve learned about life: it goes on.',
              author:'Robert Frost',
              image:'../images/Robert_Frost.jpg'
            },
            {
              quote:'I love my past. I love my present. I\'m not ashamed of what I\'ve had, and I\'m not sad because I have it no longer.',
              author:'Colette',
              image:'../images/Colette.jpg'
            },
            {
              quote:'I believe that imagination is stronger than knowledge — myth is more potent than history — dreams are more powerful than facts — hope always triumphs over experience — laughter is the cure for grief — love is stronger than death.',
              author:'Robert Fulghum'
            },
            {
              quote:'I bid you awake at dawn and discover I have gone my way and left you free.',
              author:'Sara Teasdale'
            },
            {
              quote:'When the heart weeps for what it has lost, The soul laughs for what it has found.',
              author:'Sufi aphorism'
            },
            {
              quote:'A man\'s dying is more the survivors\' affair than his own.',
              author:'Thomas Mann',
              image:'../images/Thomas_Mann.jpg'
            },
            {
              quote:'Grief is itself a medicine.',
              author:'William Cowper'
            }
          ]
        },
        {
          title:'Additional Resources',
          quotes:[
            {
              quote:'The Enlightened Heart, An Anthology of Sacred Poetry, Edited by Stephen Mitchell. ',
              author:'Published by Harper Perennial (1997)'
            },
            {
              quote:'The Enlightened Mind, An Anthology of Sacred Prose, Edited by Stephen Mitchell. ',
              author:'Published by Harper Perennial (1997)'
            },
            {
              quote:'To Bless the Space Between Us, by John O’Donohue. Published by Doubleday ',
              author:'2008'
            }
          ]
        }
      ],
      donate:[
        {
          path:'../images/action_against_hunger.png',
          url:'http://www.actionagainsthunger.org'
        },
        {
          path:'../images/afa.png',
          url:'http://www.afa.org'
        },
        {
          path:'../images/american_brain_tumor_asc.png',
          url:'http://www.abta.org'
        },
        {
          path:'../images/american_cancer_society.png',
          url:'http://www.cancer.org'
        },
        {
          path:'../images/american_heart_asc.png',
          url:'http://www.heart.org'
        },
        {
          path:'../images/american_liver_foundation.png',
          url:'http://www.liverfoundation.org'
        },
        {
          path:'../images/american_lung_asc.png',
          url:'http://www.lung.org'
        },
        {
          path:'../images/amnesty_international.png',
          url:'http://www.amnesty.org'
        },
        {
          path:'../images/apda.png',
          url:'http://www.apdaparkinson.org'
        },
        {
          path:'../images/asha_for_education.png',
          url:'http://www.ashanet.org'
        },
        {
          path:'../images/badi_foundation.png',
          url:'http://www.badi-foundation.org/en'
        },
        {
          path:'../images/bread_for_world.png',
          url:'http://www.bread.org'
        },
        {
          path:'../images/center_for_victims.png',
          url:'http://www.cvt.org'
        },
        {
          path:'../images/child_defense_fund.png',
          url:'http://www.childrendefense.org'
        },
        {
          path:'../images/family_care.png',
          url:'http://www.familycareintl.org/en/home'
        },
        {
          path:'../images/fisher_house.png',
          url:'http://www.fisherhouse.org'
        },
        {
          path:'../images/food_for_hungry.png',
          url:'http://www.fh.org'
        },
        {
          path:'../images/half_the_sky.png',
          url:'http://www.halfthesky.org/en'
        },
        {
          path:'../images/heifer_international.png',
          url:'http://www.heifer.org'
        },
        {
          path:'../images/hispanic_scholarship.png',
          url:'http://www.hsf.net'
        },
        {
          path:'../images/jane_goodall.png',
          url:'http://www.janegoodall.org'
        },
        {
          path:'../images/jewish_national.png',
          url:'http://www.jnf.org'
        },
        {
          path:'../images/maya_archaeology.png',
          url:'http://mayaarchaeology.org/'
        },
        {
          path:'../images/mercy_corps.png',
          url:'http://www.mercycorps.org/'
        },
        {
          path:'../images/parkinson_disease_foundation.png',
          url:'http://www.pdf.org/'
        },
        {
          path:'../images/psi.png',
          url:'http://www.psi.org/'
        },
        {
          path:'../images/unicef.png',
          url:'http://www.unicef.org/'
        },
        {
          path:'../images/wheelchair_foundation.png',
          url:'http://www.wheelchairfoundation.org/'
        },
        {
          path:'../images/clinton_foundation.png',
          url:'http://www.clintonfoundation.org/'
        },
        {
          path:'../images/redcross_china.png',
          url:'http://www.redcross.org.cn/hhzh'
        },
        {
          path:'../images/world_villages.png',
          url:'http://www.worldvillages.org/'
        },
        {
          path:'../images/world_wildlife_foundation.png',
          url:'http://gifts.worldwildlife.org/'
        },
        {
          path:'../images/wounded_warrior_project.png',
          url:'http://www.woundedwarriorproject.org/'
        }
      ],
      volunteer:[
        {
          path:'../images/ymca.png',
          url:'http://www.ymca.net/'
        },
        {
          path:'../images/nature_conservancy.png',
          url:'http://www.nature.org/'
        },
        {
          path:'../images/special_olympics.png',
          url:'http://www.specialolympics.org/'
        },{
          path:'../images/save_the_children.png',
          url:'http://www.savethechildren.org/'
        },{
          path:'../images/oxfam_international.png',
          url:'http://www.oxfam.org/'
        },{
          path:'../images/mda.png',
          url:'http://mda.org/'
        },{
          path:'../images/leukemia_society.png',
          url:'http://www.lls.org/'
        },{
          path:'../images/rescue_committee.png',
          url:'http://www.rescue.org/'
        },{
          path:'../images/doctors_without_borders.png',
          url:'http://www.doctorswithoutborders.org/'
        },
        {
          path:'../images/cystic_fibrosis_foundation.png',
          url:'http://www.cff.org/'
        },
        {
          path:'../images/boys_girls_club.png',
          url:'http://www.bgca.org/'
        },{
          path:'../images/boy_scouts.png',
          url:'http://www.scouting.org/'
        },{
          path:'../images/american_jewish.png',
          url:'http://www.ajws.org/'
        },
      ],
      gifts:{
        cards:[
          {
            path:'../images/gift-tile-SAG.jpg',
            url:'http://www.sagessedesigns.com/Sagesse_Designs/Sagesse_Designs_Home.html'
          },
          {
            path:'../images/gift-tile-JAC.jpg',
            url:'http://www.jacquielawson.com/'
          },
          {
            path:'../images/gift-tile-BMN.jpg',
            url:'http://www.bluemountain.com/ecards'
          },
          {
            path:'../images/gift-tile-PLP.jpg',
            url:'http://www.paperlesspost.com/'
          },
        ],
        activities:[
          {
            path:'../images/gift-tile-CSA.jpg',
            url:'http://www.carlasonheim.com/store/'
          }
        ],
        things:[
          {
            path:'../images/gift-tile-SGT.jpg',
            url:'http://www.withsympathygifts.com/'
          },
          {
            path:'../images/gift-tile-EBW.jpg',
            url:'http://www.englishbasketrywillows.com/'
          },
          {
            path:'../images/gift-tile-ESK.jpg',
            url:'http://www.earthsake.com/'
          },
          {
            path:'../images/gift-tile-SPE.jpg',
            url:'http://www.simonpearce.com/'
          },
          {
            path:'../images/gift-tile-DBW.jpg',
            url:'http://www.davisblanchardwindchimes.com/'
          }
        ],
        food:[
          {
            path:'../images/gift-tile-ZMO.jpg',
            url:'http://www.zingermans.com/'
          },
          {
            path:'../images/gift-tile-HFR.jpg',
            url:'http://www.hogsfly.com/Category.php?category_id=1'
          },
          {
            path:'../images/gift-tile-ENS.jpg',
            url:'http://www.enstrom.com/'
          },
          {
            path:'../images/gift-tile-SMC.jpg',
            url:'http://www.senormurphy.com/x/'
          },
          {
            path:'../images/gift-tile-WMM.jpg',
            url:'http://www.wondermade.com/'
          },
          {
            path:'../images/gift-tile-LFB.jpg',
            url:'http://www.linnsfruitbin.com/'
          },
          {
            path:'../images/gift-tile-TFB.jpg',
            url:'http://www.twofishbaking.com/'
          },
          {
            path:'../images/gift-tile-KCC.jpg',
            url:'http://www.karascupcakes.com/'
          },
          {
            path:'../images/gift-tile-WOS.jpg',
            url:'http://www.williams-sonoma.com/'
          },
          {
            path:'../images/gift-tile-ROT.jpg',
            url:'http://republicoftea.com/'
          },
          {
            path:'../images/gift-tile-PCT.jpg',
            url:'http://www.peets.com/'
          },
          {
            path:'../images/gift-tile-INE.jpg',
            url:'http://incredibleedibles.net/'
          },
          {
            path:'../images/gift-tile-MSF.jpg',
            url:'http://www.munchery.com/'
          },
          {
            path:'../images/gift-tile-TFF.jpg',
            url:'http://www.taitfarmfoods.com/'
          },
          {
            path:'../images/gift-tile-WPY.jpg',
            url:'http://www.worldpantry.com/'
          }
        ],
        wineries:[
          {
            path:'../images/gift-tile-CHW.jpg',
            url:'http://www.clayhousewines.com/'
          },
          {
            path:'../images/gift-tile-TFW.jpg',
            url:'http://www.fogartywinery.com/'
          },
          {
            path:'../images/gift-tile-NVD.jpg',
            url:'http://www.navarrowine.com/'
          },
          {
            path:'../images/gift-tile-PVW.jpg',
            url:'http://www.primaristorante.com/'
          }
        ],
        plants:[
          {
            path:'../images/gift-tile-GPL.jpg',
            url:'http://www.ftd.com/seeds-of-life-memory-tree-prd/sl01'
          },
          {
            path:'../images/gift-tile-TOA.jpg',
            url:'http://www.treesofantiquity.com/'
          },
          {
            path:'../images/gift-tile-ADF.jpg',
            url:'http://shop.arborday.org/content.aspx?page=Commemorative'
          }
        ],
        gift_certificates:[
          {
            path:'../images/gift-tile-OAG.jpg',
            url:'http://www.olivesandgrace.com/'
          }
        ],
        services:[
          {
            path:'../images/gift-tile-USS.jpg',
            url:'http://www.theursulines.org/2013/10/14/in-need-of-prayer/'
          }
        ],
        perpetual:[
          {
            path:'../images/gift-tile-CAS.jpg',
            url:'http://www.kilbey-kennedy.com/p/steve-kilbey-martin-kennedy-write-song.html'
          }
        ]
      }
    };
  });
