/*
var d = Date.now()
console.log(d)
*/

var library = (function() {
    return {
        TimeStamp: (function(){
            return {
                UnixTimestamp: function(){
                    //var d = Date.now().toString();
                    var d = new Date().getTime().toString();
                    d = d.substr(0,10);
                    return d;
                },
                UnixMillisecond: function(){
                    var d = Date.now();
                    return d;
                    //console.log(d);
                }
            }
        })(),
        Local: (function(){
            return {
                Time: (function() {
                    return {
                        WithSeconds: function(){
                            var hour = library.Hour.TwelveHour();
                            var minutes = library.Minute.DblDigit();
                            var amPM = library.Hour.AMPM.UpperCase();
                            var sex = library.Second.DblDigit();
                                return (hour + ":" + minutes + ":" + sex + " " + amPM);
                        },
                        WithOutSeconds: function() {
                            var hour = library.Hour.TwelveHour();
                            var minutes = library.Minute.DblDigit();
                            var amPM = library.Hour.AMPM.UpperCase();
                                return hour + ":" + minutes + " " + amPM;
                        }
                    }
                })(),
                MDY: (function(){
                    return {
                        Numeral: function(){
                            var month = library.Month.MonthNumber();
                            var day = library.Month.DateOfMonth.Numeral();
                            var year = library.Year.YearFull();
                            return (month + "/" + day + "/" + year);
                        },
                        Name: function(){
                            var month = library.Month.CurrentMonth();
                            var day = library.Month.DateOfMonth.Numeral();
                            var year = library.Year.YearFull();
                            return (month + " " + day + ", " + year);
                        }
                    }
                })(),
            }
        })(),
        Second: (function(){
            return{
                Second: function(){
                    var secs = new Date().getSeconds();
                        return secs.toString();
                },
                DblDigit: function(){
                    var secs = new Date().getSeconds();
                        if (secs < 10){
                                return String("0" + secs);
                            } else {
                                return String(secs);
                            };
                        return secs.toString();
                }
            }
        })(),
        Minute: (function(){
            return{
                Minute: function(){
                    var mins = new Date().getMinutes();
                    return mins.toString();
                },
                DblDigit: function(){
                    var mins = new Date().getMinutes();
                        if (mins < 10){
                            return String("0" + mins);
                        } else {
                            return String(mins);
                        };
                    return mins.toString();
                }
            }
        })(),
        Hour: (function(){
            return {
                TwentyFourHour: function() {
                    var hours = new Date().getHours();
                        return hours.toString();

                },
                TwelveHour: function() {
                    var hours = new Date().getHours();
                    var suffix = "am";
                        if (hours >= 12) {
                            suffix = "pm";
                            hours = hours - 12;
                        } else if (hours == 0) {
                            hours = 12;
                        }
                    return(hours).toString();        
                },
                AMPM: (function() {
                    return {
                        UpperCase: function(){
                            var hours = new Date().getHours();
                            var suffix = "AM";
                                if (hours >= 12) {
                                    suffix = "PM";
                                    hours = hours - 12;
                                } else if (hours == 0) {
                                    hours = 12;
                                }
                            return (suffix);
                        },
                        LowerCase: function(){
                                var hours = new Date().getHours();
                                var suffix = "am";
                                    if (hours >= 12) {
                                        suffix = "pm";
                                        hours = hours - 12;
                                    } else if (hours == 0) {
                                        hours = 12;
                                    }
                                return (suffix);
                        }
                    }
                })()
            }
        })(),
        Week: (function(){
            return {
                DayOfWeek: function(){
                    var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    var d = new Date().getDay();
                    return (dayNames[d]);
                },
                AbrDayOfWeek: function(){
                    var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    var d = new Date().getDay();
                    return (dayNames[d]).substring(0,3);
                },
                FirstTwoOfWeek: function(){
                    var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    var d = new Date().getDay();
                    return (dayNames[d]).substring(0,2);
                },
                WeekOfYear: function(){
                    var now = new Date();
                            var start = new Date(now.getFullYear(), 0, 0);
                            var diff = now - start;
                            var oneDay = 1000 * 60 * 60 * 24;
                            var day = Math.floor(diff / oneDay);
                                day = Math.ceil(day / 7);
                            return String(day);
                }
            }
        })(),
        Month: (function(){
            return {
                DateOfMonth: (function(){
                    return {
                        Numeral: function(){
                            var d = new Date().getDate();
                            return String(d);  
                        },
                        Ordinal: function(){
                            var date = new Date().getDate().toString();
                                switch (date) {
                                    case "11" || "12" || "13":
                                        // return (date.toString()+th);
                                        return date +'th';
                                }
                                switch (date.substr(date.length - 1)) {
                                    case '1':
                                        return date + "st";
                                    case '2':
                                        return date + "nd";
                                    case '3':
                                        return date + "rd";
                                    default:
                                        return date + "th";
                                }
                                //var dayEnd 
                        },
                        DateDblDigit: function() {
                            var d = new Date().getDate();     
                                if (d < 10){
                                     return String("0" + d);
                                } else {
                                     return String(d);
                                };
                        }
                }
                })(),
                MonthNumber: function(){
                    var d = new Date().getMonth();
                    d = d+1;
                    return (d.toString());
                    //console.log(d);
                },
                MonthNumberDblDigit: function(){
                       var d = new Date().getMonth();
                           d = d + 1;     
                                if (d<10){
                                     return String("0"+d);
                                } else {
                                    return String(d);
                                };
                            
                },
                AbrOfCurrentMonth: function(){
                    var theMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; 
                    var d = new Date().getMonth();
                    
                    return (theMonths[d]).substring(0,3);
                },
                CurrentMonth: function(){
                    var theMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; 
                    var d = new Date().getMonth();
                    
                    return theMonths[d];
                }
            }
        })(),
        Year: (function(){
            return {
                DayOfYear: (function(){
                    return {
                        Numeral: function(){
                            var now = new Date();
                            var start = new Date(now.getFullYear(), 0, 0);
                            var diff = now - start;
                            var oneDay = 1000 * 60 * 60 * 24;
                            var day = Math.floor(diff / oneDay);
                            return String(day);
                        },
                        Ordinal: function(){
                            var now = new Date();
                            var start = new Date(now.getFullYear(), 0, 0);
                            var diff = now - start;
                            var oneDay = 1000 * 60 * 60 * 24;
                            var day = Math.floor(diff / oneDay);
                                day = day.toString();
                            switch (day.substring(day.length - 1)) {
                                    case '1':
                                        return day + "st";
                                    case '2':
                                        return day + "nd";
                                    case '3':
                                        return day + "rd";
                                    default:
                                        return day + "th";
                                }
                            return String(day); 
                        }
                    }
                })(),
                YearFull: function(){
                    var d = new Date().getFullYear();
                    return String(d);
                },
                YearAbr: function(){
                    var d = new Date().getFullYear();
                    return String(d).slice(2);
                }
            }
        })(),
        Defaults: function(){
            var year = library.Year.YearFull();
            var month = library.Month.MonthNumberDblDigit();
            var date = library.Month.DateOfMonth.DateDblDigit();
            var hour = library.Hour.TwentyFourHour();
            var minutes = library.Minute.DblDigit();
            var seconds = library.Second.DblDigit();
            return year + "-" + month + "-" + date + "T" + hour + ":" + minutes + ":" + seconds;
        }
    }
})();