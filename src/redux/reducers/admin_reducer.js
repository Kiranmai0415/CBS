import { AuthTypes } from "../action_types/auth_types";

const initialState = {

    adminList: [

        {
            // id: '1',
            name: "rahul",
            email: "rahul@gmail.com",
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '2',
            name: "rajshekar",
            email: "rajshekar@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '3',
            name: "charan",
            email: "charan@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '4',
            name: "satish",
            email: "satish@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '5',
            name: "vinay",
            email: "vinay@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '6',
            name: "dharanesh",
            email: "dharanesh@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '7',
            name: "venky",
            email: "venky@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '8',
            name: "shankar",
            email: "shankar@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '9',
            name: "indraja",
            email: "indraja@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '10',
            name: "padmaja",
            email: "padmaja@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '11',
            name: "rahul",
            email: "rahul@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '12',
            name: "rajshekar",
            email: "rajshekar@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '13',
            name: "charan",
            email: "charan@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '14',
            name: "satish",
            email: "satish@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '15',
            name: "vinay",
            email: "vinay@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '16',
            name: "dharanesh",
            email: "dharanesh@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '17',
            name: "venky",
            email: "venky@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '18',
            name: "shankar",
            email: "shankar@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '19',
            name: "indraja",
            email: "indraja@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '20',
            name: "padmaja",
            email: "padmaja@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '21',
            name: "padmaja",
            email: "padmaja@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '1',
            name: "rahul",
            email: "rahul@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '2',
            name: "rajshekar",
            email: "rajshekar@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '3',
            name: "charan",
            email: "charan@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '4',
            name: "satish",
            email: "satish@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '5',
            name: "vinay",
            email: "vinay@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '6',
            name: "dharanesh",
            email: "dharanesh@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '7',
            name: "venky",
            email: "venky@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '8',
            name: "shankar",
            email: "shankar@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '9',
            name: "indraja",
            email: "indraja@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '10',
            name: "padmaja",
            email: "padmaja@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '11',
            name: "rahul",
            email: "rahul@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '12',
            name: "rajshekar",
            email: "rajshekar@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '13',
            name: "charan",
            email: "charan@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '14',
            name: "satish",
            email: "satish@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '15',
            name: "vinay",
            email: "vinay@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '16',
            name: "dharanesh",
            email: "dharanesh@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '17',
            name: "venky",
            email: "venky@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '18',
            name: "shankar",
            email: "shankar@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '19',
            name: "indraja",
            email: "indraja@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '20',
            name: "padmaja",
            email: "padmaja@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },
        {
            // id: '21',
            name: "padmaja",
            email: "padmaja@gmail.com",
            designation: 'UI developer',
            reportingManager: 'Katehunston'

        },

    ]


};

export default function AdminReducer(state = initialState, action = null) {
    if (!state) {
        state = initialState;
    }
    // console.log("hi this is charan", action.payload)
    switch (action.type) {
        case "ADD_BUTTION_SUCCESS": {
            // const { token } = action.data;
            // localStorage.setItem("token", token);
            // localStorage.setItem("user", JSON.stringify(action.data));
            console.log("adminn list", state.adminList);

            return {
                ...state,
                adminList: [...state.adminList, action.data]
            };
        }

        case AuthTypes.REQUEST_SUCCESS: {
            return {
                ...state,
                adminList:action.data
            }
        }



        case "sortedListUp": {
            return {
                ...state, adminList: action.payload
            };
        }
        case "sortedListDown": {
            return {
                ...state, adminList: action.payload
            };

        }

        case AuthTypes.REQUEST_SUCCESS: {

            console.log("hello reducer unnva...");


            return {
                ...state,
                adminList: action.data
            };
        }

        // case AuthTypes.RESET_SUCCESS: {
        //   const { token } = action.data;
        //   state.initialState = action.data
        //   localStorage.setItem("token", token);
        //   localStorage.setItem("user", JSON.stringify(action.data));
        //   return {
        //     ...action.data,
        //   };
        // }
        default:
            return state;
    }
}
