function formatDate(date) { 
    const monthShorts = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
    ];

    const month = monthShorts[new Date(date).getMonth()];

    return `${month} ${new Date(date).getDate()} ${new Date(date).getFullYear()}`
}

module.exports = formatDate;