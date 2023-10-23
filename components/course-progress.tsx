
interface CourseProgressProps {
    value: number;
    variant?: "default" | "success";
    size?: "default" | "sm";
};

const colorByVariant = {
    default : "text-sky-700",
    success: "text-emerald-700",
}

const sizeByVariant = {
    default : "text-sm",
    sm: "text-xs",
}

export const CourseProgress = ({
    value,
    variant,
    size
}:CourseProgressProps) => {
    return (
        <div>
            
        </div>
    )
}