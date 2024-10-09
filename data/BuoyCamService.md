https://www.ndbc.noaa.gov/buoycam.php?station=46005

backend service

download photo from each station at certain time intervals (figure out noaa photo schedule)

process photo

- trim bottom black bar and read/interprit datetime
- split into 6 individual photos

save 6 photos to db with datetime meta data

small api to expose photos for a give time period

cron jobs to clear after a given time period (day? week? month?)
