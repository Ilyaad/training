/**
 * Copyright (C) 2015 Alfresco Software Limited.
 * <p/>
 * This file is part of the Alfresco SDK Samples project.
 * <p/>
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * <p/>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p/>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.alfresco.tutorial.doclibaction.evaluator;

import org.alfresco.web.evaluator.BaseEvaluator;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

/**
 * An evaluator that will return true if a node has the out-of-the-box
 * aspect "cm:emailed" applied.
 *
 * @author martin.bergljung@alfresco.com
 */
public class CheckIfDocIsEmailedEvaluator extends BaseEvaluator {
    private static final String ASPECT_EMAILED = "cm:emailed";

    @Override
    public boolean evaluate(JSONObject jsonObject) {
        try {

            JSONArray nodeAspects = getNodeAspects(jsonObject);
            if (nodeAspects == null) {
                return false;
            } else {
                if (nodeAspects.contains(ASPECT_EMAILED)) {
                    return true;
                } else {
                    return false;
                }
            }
        } catch (Exception err) {
            throw new RuntimeException("JSONException whilst running action evaluator: " + err.getMessage());
        }
    }
}