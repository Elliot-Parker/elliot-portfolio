import { animate, group, query, style, transition, trigger } from "@angular/animations";

export const fader = 
    trigger("routeAnim", [
        transition("* => in", fadeTo("forward")),
        transition("* => out", fadeTo("backward")),
        transition("in => *", fadeTo("backward")),
        transition("out => *", fadeTo("forward")),
    ])

function fadeTo(nav: string) 
{
    const optional = { optional: true }
    const isForward = nav == "forward";
    const ease = "cubic-bezier(0.83, 0, 0.17, 1)";
    return [
        query(":enter, :leave", [
            style({
                position: "absolute",
                left: 0,
                width: "100%",
                opacity: 0,
            })
        ], optional),
        query(":enter", [
            style({ transform: isForward ? "scale(0.98)" : "scale(1.03)" })
        ]),
        group([
            query(":leave", [
                animate(`250ms ${ease}`, style({
                    opacity: 0, transform: isForward ? "scale(1.01)" : "scale(1)",
                })),
            ], optional),
            query(':enter', [
                animate(`250ms ${ease}`, style({
                    opacity: 1, transform: isForward ? "scale(1)" : "scale(1)" 
                })),
            ])
        ])
    ];
}

export const modalAnim = 
    trigger("modalTrigger", [
        transition(":enter", [
            style({ opacity: 0 }),
            animate("100ms", style({ opacity: 1 }))
        ]),
        transition(":leave", [
            animate("100ms", style({ opacity: 0 }))
        ])
    ])