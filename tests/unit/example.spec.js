import { expect } from "chai"
import trafikhandelser from "@/views/trafikhandelser.vue" 

// Handles the value state of showNorr
describe("trafikhandelser.getShowBoolean()", () => {
    it("handles the state of showNorr", () => {
        let before = trafikhandelser.methods.getShowBoolean("norr")
        trafikhandelser.methods.popupList("norr")
        let after = trafikhandelser.methods.getShowBoolean("norr")
        expect(before).to.not.equal(after)
        
    })
    
})