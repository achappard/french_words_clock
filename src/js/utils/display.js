export const get_words_highlighted = () => {
    const date = new Date();
    return get_message(date.getHours(), date.getMinutes());
}

const hours_in_letters = {
    1: "une",
    2: "deux",
    3: "trois",
    4: "quatre",
    5: "cinq_H",
    6: "six",
    7: "sept",
    8: "huit",
    9: "neuf",
    10: "dix_H",
    11: "onze",
}


const get_message = (hours, minutes) => {
    let msg_part = ['il', 'est'];

    const display_next_hour = minutes >= 33;
    const display_midnight_midday = (hours % 12 === 0 && !display_next_hour) || (display_next_hour && (hours + 1) % 12 === 0);
    const display_minutes = minutes > 3 && minutes <= 56;

    // Message pour les heures
    let hour_message = '';
    if (display_midnight_midday) {
        hour_message = hours >= 23 || hours <= 1 ? "minuit" : "midi";
        msg_part.push(hour_message);
    } else {
        const hour_to_display = display_next_hour ? (hours + 1) % 12 : hours % 12;
        msg_part.push(hours_in_letters[hour_to_display]);
        if (hour_to_display > 1) {
            msg_part.push("pluralH");
        } else {
            msg_part.push("singularH");
        }
    }

    if (!display_minutes) {
        return msg_part;
    }

    // Message pour les minutes
    const display_and_text = (minutes >= 13 && minutes <= 17) || (minutes >= 28 && minutes <= 32),
        display_minus_text = minutes >= 33 && minutes <= 56;

    // Affichage 'et quart' ou 'et demi'
    if (display_and_text) {
        if (minutes >= 13 && minutes <= 17) {
            msg_part.push("et_Q", "quart");
        } else {
            msg_part.push("et_D", "demie");
        }
    }
    // Affiche des moins....
    else if (display_minus_text) {
        msg_part.push("moins");
        if(minutes>= 33 && minutes <= 37){
            msg_part.push("vingt", "-", "cinq_M");
        }else if(minutes>= 38 && minutes <= 42){
            msg_part.push("vingt");
        }else if(minutes>= 43 && minutes <= 47){
            msg_part.push("le", "quart");
        }else if(minutes>= 48 && minutes <= 52){
            msg_part.push("dix_M");
        }else if(minutes>= 53 && minutes <= 56){
            msg_part.push("cinq_M");
        }

    }else if(minutes>=4 && minutes <=7){
        msg_part.push("cinq_M");
    }else if(minutes>=8 && minutes <=12){
        msg_part.push("dix_M");
    }else if(minutes>=18 && minutes <=22){
        msg_part.push("vingt");
    }else if(minutes>=23 && minutes <=27){
        msg_part.push("vingt", "-", "cinq_M");
    }
    return msg_part;
}