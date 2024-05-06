"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = exports.updateRide = exports.ride = void 0;
const joi_1 = __importDefault(require("joi"));
exports.ride = joi_1.default.object({
    from: joi_1.default.string().optional(),
    to: joi_1.default.string().optional(),
    status: joi_1.default.string().optional(),
    date: joi_1.default.date().optional(),
    time: joi_1.default.date().optional(),
    driverId: joi_1.default.string().optional(),
    price: joi_1.default.number().optional(),
});
exports.updateRide = joi_1.default.object({
    from: joi_1.default.string().optional(),
    to: joi_1.default.string().optional(),
    status: joi_1.default.string().optional(),
    date: joi_1.default.date().optional(),
    time: joi_1.default.date().optional(),
    driverId: joi_1.default.string().optional(),
    price: joi_1.default.number().optional(),
});
const validateRequest = (schema) => {
    // eslint-disable-next-line consistent-return
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        next();
    };
};
exports.validateRequest = validateRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy91dGlscy92YWxpZGF0aW9ucy92YWxpZGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDhDQUFxQjtBQUVQLFFBQUEsSUFBSSxHQUFHLGFBQUcsQ0FBQyxNQUFNLENBQUM7SUFDOUIsSUFBSSxFQUFFLGFBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDN0IsRUFBRSxFQUFFLGFBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDM0IsTUFBTSxFQUFFLGFBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDL0IsSUFBSSxFQUFFLGFBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDM0IsSUFBSSxFQUFFLGFBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDM0IsUUFBUSxFQUFFLGFBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDakMsS0FBSyxFQUFHLGFBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7Q0FDaEMsQ0FBQyxDQUFBO0FBR1csUUFBQSxVQUFVLEdBQUcsYUFBRyxDQUFDLE1BQU0sQ0FBQztJQUNuQyxJQUFJLEVBQUUsYUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUM3QixFQUFFLEVBQUUsYUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUMzQixNQUFNLEVBQUUsYUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUMvQixJQUFJLEVBQUUsYUFBRyxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUMzQixJQUFJLEVBQUUsYUFBRyxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUMzQixRQUFRLEVBQUUsYUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUNqQyxLQUFLLEVBQUcsYUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtDQUNoQyxDQUFDLENBQUE7QUFLSyxNQUFNLGVBQWUsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFO0lBQ3hDLDZDQUE2QztJQUM3QyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtRQUN4QixNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUNWLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLENBQUM7UUFDRCxJQUFJLEVBQUUsQ0FBQztJQUNULENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQVRXLFFBQUEsZUFBZSxtQkFTMUIifQ==