function(instance, properties, context) {


    instance.data.runs++

    instance.publishState("current_iteration_number", instance.data.runs + 1)
    instance.triggerEvent("repeated_flow")



}