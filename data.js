import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default [
  {
    element: ['FontAwesome5', 'cat'],
    pet: 'cats',

    pets: [
      {
        id: '1',
        name: 'Lily',
        img: require('./assets/cat1.png'),
        type: 'Chausie',
        age: '5 years old',
      },
      {
        id: '2',
        name: 'Lucy',
        img: require('./assets/cat2.png'),
        type: 'Bobtail',
        age: '2 years old',
      },
      {
        id: '3',
        name: 'Nala',
        img: require('./assets/cat3.png'),
        type: 'Ragamuffin',
        age: '2 years old',
      },
    ],
  },
  {
    pet: 'dogs',
    element: ['FontAwesome5', 'dog'],

    pets: [
      {
        id: '1',
        name: 'Bally',
        img: require('./assets/dog1.png'),
        type: 'German Shepherd',
        age: '2 years old',
      },
      {
        id: '2',
        name: 'Max',
        img: require('./assets/dog2.png'),
        type: 'Foxhound',
        age: '2 years old',
      },
    ],
  },
  {
    pet: 'birds',
    //rabbit
    element: ['MaterialCommunityIcons', 'bird'],

    pets: [
      {
        id: '1',
        name: 'Coco',
        img: require('./assets/bird1.png'),
        type: 'Parrot',
        age: '2 years old',
      },
      {
        id: '2',
        name: 'Alfie',
        img: require('./assets/bird2.png'),
        type: 'Parrot',
        age: '4 years old',
      },
    ],
  },
  {
    pet: 'bunnies',
    //rabbit
    element: ['MaterialCommunityIcons', 'rabbit'],

    pets: [
      {
        id: '1',
        name: 'Boots',
        img: require('./assets/bunny1.png'),
        type: 'Angora',
        age: '1 years old',
      },
      {
        id: '2',
        name: 'Pookie',
        img: require('./assets/bunny2.png'),
        type: 'Angora',
        age: '1 years old',
      },
    ],
  },
]
