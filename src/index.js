function antennaCoverage(input) {
    let quantity = input[0]
    let area = input[1]
    let intervals = Array(quantity).fill().map(() => Array(2).fill(0));
    let j = 0
    /**
     * for needs to parse input and find borders of each antenna
     */
    for (let i = 0; i < quantity * 2; i++) {
        let antennaPosition = input[i + 2] - 1;
        i++
        let antennaCovering = input[i + 2];
        intervals[j][0] = antennaPosition - antennaCovering;
        intervals[j][1] = antennaPosition + antennaCovering;
        j++
    }
    /**
     *now we create array to check and store all positions in area
     */
    let costOfCoverage = [];
    for (let i = 0; i < area; i++) {
        costOfCoverage[i] = i + 1;

        let covered = false;
        for (let j = 0; j < quantity; j++) {
            if (intervals[j][0] <= i && intervals[j][1] >= i) {
                covered = true;
                break;
            }
        }
        /**
         *  if position i is already covered, costOfCoverage[i] is the same with costOfCoverage[i - 1]
         */
        if (covered) {
            if (i === 0) {
                costOfCoverage[i] = 0
            } else {
                costOfCoverage[i] = costOfCoverage[i - 1];
            }
            /**
             * if position i is not covered, for all antenna intervals that are on the left side of i we check that thay can cover this position
             * to get min cost of coverage
             */
        } else {
            for (let j = 0; j < quantity; j++) {
                if (intervals[j][0] > i) {
                    continue;
                }
                let diff = i - intervals[j][1];
                costOfCoverage[i] = Math.min(costOfCoverage[i], diff + (intervals[j][0] <= diff ? 0 : costOfCoverage[intervals[j][0] - diff - 1]));
            }
        }
    }
    return (costOfCoverage[area - 1]);
}


exports.antennaCoverage = antennaCoverage;
