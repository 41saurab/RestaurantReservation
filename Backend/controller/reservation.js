import ErrorHandler from "../error/error.js";
import { Reservation } from '../models/reservationSchema.js'

const sendReservation = async (req, res, next) => {
    const { firstName, lastName, email, phone, date, time } = req.body;
    if (!firstName || !lastName || !email || !phone || !date || !time) {
        return next(new ErrorHandler('Fill all details'))
    }
    try {
        await Reservation.create({
            firstName,
            lastName,
            email,
            phone,
            date,
            time
        });
        res.status(201).json({
            success: true,
            message: "Reservation created successfully"
        })
    } catch (error) {
        if (error.name === "ValidatorError") {
            const ValidatorErrors = Object.values(error.errors).map(
                (error) => error.message
            )
            return next(new ErrorHandler(validationErrors.json(","), 400))
        }
        return next(error)
    }
}

export default sendReservation;


// import ErrorHandler from "../middlewares/error.js";
// import { Reservation } from "../models/reservation.js";


// const send_reservation = async (req, res, next) => {
//     const { firstName, lastName, email, date, time, phone } = req.body;
//     if (!firstName || !lastName || !email || !date || !time || !phone) {
//         return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));
//     }

//     try {
//         await Reservation.create({ firstName, lastName, email, date, time, phone });
//         res.status(201).json({
//             success: true,
//             message: "Reservation Sent Successfully!",
//         });
//     } catch (error) {
//         // Handle Mongoose validation errors
//         if (error.name === 'ValidationError') {
//             const validationErrors = Object.values(error.errors).map(err => err.message);
//             return next(new ErrorHandler(validationErrors.join(', '), 400));
//         }

//         // Handle other errors
//         return next(error);
//     }
// };


// export default send_reservation;