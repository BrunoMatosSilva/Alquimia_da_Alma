"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supabase = void 0;
const supabase_js_1 = require("@supabase/supabase-js");
const supabaseURL = process.env.SUPABASE_URL;
const supabaseKEY = process.env.SUPABASE_KEY;
exports.supabase = (0, supabase_js_1.createClient)(supabaseURL, supabaseKEY, {
    auth: {
        persistSession: false,
    },
});
//# sourceMappingURL=supabase-config.js.map